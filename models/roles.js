const roles = {
    productOwner: ['read','delete'],
    scrumMaster: ['read', 'update', 'replace','delete'],
    developer: ['create','read', 'update', 'replace',]
  };

module.exports = roles;
