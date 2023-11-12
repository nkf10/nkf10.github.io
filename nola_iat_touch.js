define(['pipAPI', 'https://nkf10.github.io/qstiat6.js'], function(APIConstructor, stiatExtension){

	var API = new APIConstructor();
		  return stiatExtension({
		  isTouch:true,
		  category : { 
		    name : 'ID', //Will appear in the data.
		    title : {
		      media : {word : 'Intellectual Disability'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
			    {word: 'dependent'},
    		    		{word: 'mental handicap'},
				{word: 'slow learner'},
			    	{word: 'impaired'},
				{word: 'special needs'}
		
		    ],
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'2em'}
		  },	

  		attribute1 : 
			{
			name : 'N', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'sickness'},
				{word: 'hatred'},
				{word: 'disease'},
				{word: 'terrible'},
				{word: 'poison'}
				
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'2em'}
			},
		attribute2 : 
			{
			name : 'P', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'happiness'},
				{word: 'laughter'},
				{word: 'joyful'},
				{word: 'rainbow'},
				{word: 'sunshine'}
				
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'2em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
