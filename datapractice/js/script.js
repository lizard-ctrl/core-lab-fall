const tarotPull =
    {
   //users background
    firstName: 'Emma' ,
    middleName: 'Taylor',
    dateOfBirth: '1998–09-10',
    starSign: 'Virgo',
    moonSign: 'Taurus',
    rising: 'Pisces',
    jupiter:'Pisces',
    saturn: 'Taurus',
    mars: 'Leo',
    mercury: 'Virgo',
    venus: 'Virgo',
    Pluto: 'Sagittarius',
    Neptune: 'Capricorn',
    Uranus: 'Aquarius',
 
  //deck information
    deck: 'The Hermetic Tarot',
    artist: 'Godfrey Dowson',
    beliefSystem: 'The Secret Order of the Golden Dawn' ,
    cardAmount: 78,
    deckType: 'Standard Tarot',
 
    generalPull: {
        past: [
        {
          card: 'Four of Cups' ,
          orientation: 'Upright',
          cardNumber: 4,
          meaning: 'a time of being consumed by your own emotions and with life’s twists and turns',
          illustration: 'four cups overflowing with water being spurted by a fountain at the top',
        }
      ],

    present: [
        {
          card: 'Ten of Pentacles' ,
          orientation: 'Upright',
          cardNumber: 10,
          meaning: 'a positive sign that you have reached a point of completion and accomplishment in your journey',
          illustration: 'ten flowers blooming all over the card',
        }
      ],
        future: [
        {
          card: 'Four of Swords' ,
          orientation: 'Reversed',
          cardNumber: 4,
          meaning: 'a powerful message that you need to take time out to rest and recharge your energy',
          illustration: 'swords piercing through a flower in the middle with two clenched fists at the top',
       }
      ],
        extraCards: [
        {
          card: 'Two of Wands' ,
          orientation: 'Reversed',
          cardNumber: 2,
          meaning: 'encourages you to draw your attention inwards and focus on your personal goals',
          illustration: 'two swords piercing through a clenched fist with flames',
        },
      {
          card: 'Five of Pentacles' ,
          orientation: 'Reversed',
          cardNumber: 5,
          meaning: 'an end to difficult times',
          illustration: 'five pentacles with leaves and flowers surrounding them',
        },
         
      ]
},
   presentCard: function(){
      const presentPull = this.generalPull.present[0].card + this.generalPull.present[0].orientation + this.generalPull.present[0].meaning;
      return presentPull;
    }

}