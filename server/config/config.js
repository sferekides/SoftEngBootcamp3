//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
      uri: 'mongodb+srv://administrator:FVRUYzO45ebm37T3@savvascluster-hb0nq.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
    }, 
    openCage: {
      key: '20a920f011cb44cb9a55635b15d04ffa' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    port: 8080
  };