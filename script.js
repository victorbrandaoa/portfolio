import CardSection from './components/cardSection.js';

(function() {
  const main = document.querySelector('main');

  const dictSections = {
    "contact": [
      "reach"
    ],
    "skills": [
      "learned",
      "learning",
      "to-learn"
    ],
    "about": [
      "study",
      "work",
      "leisure",
      "likes"
    ]
  };

  for (const key in dictSections) {
    main.insertAdjacentHTML("afterbegin", CardSection.createComponent(key, dictSections[key]));
  }
})()
