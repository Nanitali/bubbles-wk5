exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ducks').del()
    .then(function () {
      // Inserts seed entries
      return knex('ducks').insert([
        { id: 1, lat: -36.864048, lng: 174.774272, name: 'Alice', contact: '02115296874', details: 'Can someone please help identify a plant growing in my garden', timeframe: 'today', type: 'request' },
        { id: 2, lat: -36.8648243, lng: 174.77378, name: 'Amy', contact: 'amy_catlove@cat.com', details: 'Can someone help me to look after my cats', timeframe: 'Easter Monday', type: 'request' },
        { id: 3, lat: -36.867205, lng: 174.776436, name: 'Bambam', contact: '02764359136', details: 'I can offer protection - I used to work in security ;)', timeframe: 'Any time', type: 'offer' },
        { id: 4, lat: -36.8670256, lng: 174.7765077, name: 'Eve', contact: 'eve-supermum@superwoman.com', details: 'available to listen if you need emotional support', timeframe: 'Tuesday morning', type: 'offer' }

      ])
    })
}
