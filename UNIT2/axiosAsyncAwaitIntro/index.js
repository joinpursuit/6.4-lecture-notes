// Write something that uses the deck api.
// Get a new deck of cards, then shuffle them, then draw two cards.

document.addEventListener("DOMContentLoaded", () => {
  // async function returnOne() { // if async is put in front of a function
  //     return 1;                   // it returns a promise
  // }

  // returnOne().then(res => {
  //     debugger
  // })

  const fetchAllCards = async () => {
      try {

          let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
          let deck_id = res.data.deck_id;
          let shuffled = await axios.get(
            `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`
          );
          let drawCards = await axios.get(
            `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
          );
          console.log(drawCards.data.cards)
      } catch(err) {
          console.log(err);
          debugger
      }
  };

  fetchAllCards();
  console.log("Whats up?")
  // await axios.get("jsdklgjsa") // would freak out because not inside of async
});

