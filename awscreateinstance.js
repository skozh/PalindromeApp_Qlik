var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});


var instanceParams = {
   ImageId: 'ami-5e8bb23b', 
   InstanceType: 't2.micro',
   MinCount: 1,
   MaxCount: 1,
   UserData: "IyEvYmluL2Jhc2gNCmFwdC1nZXQgdXBkYXRlDQphcHQtZ2V0IHVwZ3JhZGUNCmN1cmwgLWZzU0wgaHR0cHM6Ly9kb3dubG9hZC5kb2NrZXIuY29tL2xpbnV4L3VidW50dS9ncGcgfCBzdWRvIGFwdC1rZXkgYWRkIC0NCmFkZC1hcHQtcmVwb3NpdG9yeSAiZGViIFthcmNoPWFtZDY0XSBodHRwczovL2Rvd25sb2FkLmRvY2tlci5jb20vbGludXgvdWJ1bnR1ICQobHNiX3JlbGVhc2UgLWNzKSBzdGFibGUiDQphcHQtZ2V0IHVwZGF0ZQ0KYXB0LWdldCBpbnN0YWxsIC15IGRvY2tlci1jZQ0KY3VybCAtTCBodHRwczovL2dpdGh1Yi5jb20vZG9ja2VyL2NvbXBvc2UvcmVsZWFzZXMvZG93bmxvYWQvMS4xOC4wL2RvY2tlci1jb21wb3NlLWB1bmFtZSAtc2AtYHVuYW1lIC1tYCAtbyAvdXNyL2xvY2FsL2Jpbi9kb2NrZXItY29tcG9zZQ0KY2htb2QgK3ggL3Vzci9sb2NhbC9iaW4vZG9ja2VyLWNvbXBvc2UNCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vc2tvemgvUGFsaW5kcm9tZV9BcHAuZ2l0DQpjZCBQYWxpbmRyb21lX0FwcA0KZG9ja2VyLWNvbXBvc2UgdXA=",
   SecurityGroupIds: [
      'sg-0da1fbb401307619e',
      
    ]
};

// Create a promise on an EC2 service object
var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();

// Handle promise's fulfilled/rejected states
instancePromise.then(
  function(data) {
    console.log(data);
    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
    // Add tags to the instance
    tagParams = {Resources: [instanceId], Tags: [
       {
          Key: 'Name',
          Value: 'Prod'
       }
    ]};
    // Create a promise on an EC2 service object
    var tagPromise = new AWS.EC2({apiVersion: '2016-11-15'}).createTags(tagParams).promise();
    // Handle promise's fulfilled/rejected states
    tagPromise.then(
      function(data) {
        console.log("Instance tagged");
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });