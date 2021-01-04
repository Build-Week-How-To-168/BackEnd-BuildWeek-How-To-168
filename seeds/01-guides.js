
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        { title: 'How to share large files that are too big for email', body:'1. Use Google Drive 2. Use dropbox 3. Send through WeTransfer'},
        { title: 'How to pair Samsung Galaxy Buds Plus to Windows 10 Desktop', 
          body:'Step 1 :Open the case so that the buds are in pairing mode. Step 2: Go to settings then Bluetooth & other devices. Step 3: Click on Galaxy Buds Plus to connect. '},
      ]);
    });
};

