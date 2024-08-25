const recipes = {
    'butter-chicken': {
      title: 'Butter Chicken (Punjab)',
      description: 'A rich and creamy curry made with marinated chicken.',
      ingredients: [
        '500g chicken',
        '1 cup yogurt',
        '2 tbsp butter',
        '1 cup cream',
        'Spices: garam masala, turmeric, chili powder',
        'Tomato puree'
      ],
      steps: [
        'Marinate the chicken in yogurt and spices for 1 hour.',
        'Cook the chicken in butter until golden.',
        'Add tomato puree and cook for 10 minutes.',
        'Stir in cream and simmer for 20 minutes.'
      ]
    },
    'chole-bhature': {
      title: 'Chole Bhature (Delhi)',
      description: 'A popular dish of spicy chickpeas served with fluffy fried bread.',
      ingredients: [
        '2 cups chickpeas, soaked overnight',
        '2 onions, chopped',
        '2 tomatoes, chopped',
        'Spices: garam masala, turmeric, red chili powder',
        'Dough for Bhature'
      ],
      steps: [
        'Cook chickpeas with spices until soft.',
        'Prepare the dough and deep fry to make Bhature.',
        'Serve hot with Chole and garnished with onions.'
      ]
    },
    'masala-dosa': {
      title: 'Masala Dosa (Karnataka)',
      description: 'A crispy dosa filled with spiced potato filling.',
      ingredients: [
        '2 cups dosa batter',
        '2 large potatoes, boiled',
        '1 onion, sliced',
        'Spices: mustard seeds, turmeric, curry leaves',
        'Accompaniments: coconut chutney, sambar'
      ],
      steps: [
        'Prepare the dosa batter and let it ferment overnight.',
        'Cook the potatoes with spices to make the filling.',
        'Spread the batter on a hot tawa to make dosas.',
        'Place the filling inside and fold the dosa.'
      ]
    },
    'hyderabadi-biryani': {
      title: 'Hyderabadi Biryani (Telangana)',
      description: 'Aromatic basmati rice layered with marinated meat and cooked with saffron.',
      ingredients: [
        '500g chicken or mutton',
        '2 cups basmati rice',
        '1 cup yogurt',
        'Spices: bay leaf, cardamom, cinnamon, cloves',
        'Fried onions, saffron'
      ],
      steps: [
        'Marinate the meat with yogurt and spices.',
        'Cook rice with spices and set aside.',
        'Layer the meat and rice in a pot and cook on low heat for 30 minutes.'
      ]
    },
    'vada-pav': {
      title: 'Vada Pav (Maharashtra)',
      description: 'A spicy potato fritter sandwiched between a pav with chutneys.',
      ingredients: [
        '4 pav buns',
        '2 large potatoes, boiled',
        '1 cup besan (gram flour)',
        'Spices: mustard seeds, turmeric, red chili powder',
        'Chutneys: green chutney, garlic chutney'
      ],
      steps: [
        'Mash boiled potatoes and mix with spices.',
        'Form the mixture into balls and dip in besan batter.',
        'Deep fry until golden brown.',
        'Serve in pav with chutneys.'
      ]
    },
    'dhokla': {
      title: 'Dhokla (Gujarat)',
      description: 'A steamed savory cake made from fermented rice and chickpea batter.',
      ingredients: [
        '1 cup rice',
        '1/2 cup chickpea flour',
        '1/2 cup yogurt',
        'Spices: mustard seeds, green chili, curry leaves',
        'Eno (fruit salt) for rising'
      ],
      steps: [
        'Mix rice, chickpea flour, and yogurt into a smooth batter.',
        'Add Eno and steam the batter for 20 minutes.',
        'Temper with mustard seeds, green chili, and curry leaves.',
        'Serve with green chutney.'
      ]
    },
    'rosogolla': {
      title: 'Rosogolla (West Bengal)',
      description: 'Spongy, sweet dumplings made from chhena, soaked in sugar syrup.',
      ingredients: [
        '1 liter milk',
        '1 tbsp lemon juice',
        '1 cup sugar',
        '4 cups water',
        '1 tsp cardamom powder'
      ],
      steps: [
        'Boil milk and add lemon juice to curdle it.',
        'Strain the chhena and knead into smooth balls.',
        'Boil sugar and water to make syrup, then add chhena balls.',
        'Cook for 15 minutes until they double in size.',
        'Serve chilled with syrup.'
      ]
    },
    'momos': {
      title: 'Momos (Sikkim)',
      description: 'Steamed dumplings filled with vegetables or meat, served with spicy chutney.',
      ingredients: [
        '2 cups flour',
        '1 cup minced meat or vegetables',
        'Spices: ginger, garlic, green chili',
        'Chutney: red chili, garlic, tomatoes'
      ],
      steps: [
        'Prepare dough and roll out into thin circles.',
        'Fill with meat or vegetables and fold into dumplings.',
        'Steam for 10-15 minutes.',
        'Serve with spicy chutney.'
      ]
    },
    'dal-bati-churma': {
      title: 'Dal Baati Churma (Rajasthan)',
      description: 'Baked wheat balls served with spicy lentils and sweet churma.',
      ingredients: [
        '2 cups wheat flour',
        '1/2 cup ghee',
        '1 cup chana dal',
        'Spices: cumin, coriander, turmeric',
        'Sugar for churma'
      ],
      steps: [
        'Knead wheat flour with ghee and water to make dough.',
        'Form into balls and bake until golden brown.',
        'Cook dal with spices and serve with bati and sweet churma.'
      ]
    },
    'litti-chokha': {
      title: 'Litti Chokha (Bihar)',
      description: 'Wheat flour dough balls stuffed with spiced gram flour and served with mashed vegetables.',
      ingredients: [
        '2 cups wheat flour',
        '1 cup sattu (roasted gram flour)',
        'Spices: ajwain, mustard oil, green chili',
        'Vegetables: eggplant, tomato, potato'
      ],
      steps: [
        'Prepare dough and stuff with spiced sattu mixture.',
        'Bake the littis until crisp.',
        'Roast and mash vegetables with spices for chokha.',
        'Serve hot with ghee.'
      ]
    },
    'pakhala-bhaat': {
      title: 'Pakhala Bhaat (Odisha)',
      description: 'Fermented rice dish served with fried or mashed vegetables.',
      ingredients: [
        '2 cups cooked rice',
        '4 cups water',
        'Spices: cumin, mustard seeds, green chili',
        'Vegetables: spinach, brinjal, potatoes'
      ],
      steps: [
        'Soak cooked rice in water overnight to ferment.',
        'Prepare a tempering with mustard seeds, cumin, and chili.',
        'Serve pakhala with fried or mashed vegetables.'
      ]
    },
    'smoked-pork': {
      title: 'Smoked Pork (Nagaland)',
      description: 'Pork smoked with dry bamboo shoot and indigenous herbs.',
      ingredients: [
        '500g pork',
        '50g dry bamboo shoot',
        'Spices: ginger, garlic, Naga chili',
        'Herbs: local herbs and greens'
      ],
      steps: [
        'Smoke the pork with bamboo shoot and herbs for 2 hours.',
        'Cook with ginger, garlic, and chili until tender.',
        'Serve with steamed rice.'
      ]

    }
  };
  
  function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    const recipeDetails = `
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
      <h3>Steps:</h3>
      <ol>${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol>
    `;
    document.getElementById('recipe-details').innerHTML = recipeDetails;
    document.getElementById('recipe-modal').style.display = 'block';
  }
  
  function closeRecipe() {
    document.getElementById('recipe-modal').style.display = 'none';
  }