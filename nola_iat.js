define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){

	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Intellectual Disability', //Will appear in the data.
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
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Unpleasant', //Attribute label
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
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pleasant', //Attribute label
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
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });

API.addSettings('onEnd', window.minnoJS.onEnd);

API.addSettings('logger', {
    // gather logs in array
    onRow: function(logName, log, settings, ctx){
        if (!ctx.logs) ctx.logs = [];
        ctx.logs.push(log);
    },
    // onEnd trigger save (by returning a value)
    onEnd: function(name, settings, ctx){
        return ctx.logs;
    },
    // Transform logs into a string
    // we save as CSV because qualtrics limits to 20K characters and this is more efficient.
    serialize: function (name, logs) {
        var headers = ['group', 'latency', 'block', 'stimulus', 'correct'];
        var content = logs.map(function (log) { return [log.data.alias, log.latency, log.data.block, log.data.stimIndex, log.data.score]; });
        content.unshift(headers);
        return toCsv(content);

        function toCsv(matrice) { return matrice.map(buildRow).join('\n'); }
        function buildRow(arr) { return arr.map(normalize).join(','); }
        // wrap in double quotes and escape inner double quotes
        function normalize(val) {
            var quotableRgx = /(\n|,|")/;
            if (quotableRgx.test(val)) return '"' + val.replace(/"/g, '""') + '"';
            return val;
        }
    },
    // Set logs into an input (i.e. put them wherever you want)
    send: function(name, serialized){
        window.minnoJS.logger(serialized);
    }
});
