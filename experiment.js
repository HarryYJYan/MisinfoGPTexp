/* initialize jsPsych */
var jsPsych = initJsPsych({
  on_finish: function() {
    jsPsych.data.displayData();
  }
});

/* create timeline */
var timeline = [];
var files = ['./stim/bb09.png',
'./stim/bb08.png',
'./stim/rh01.png',
'./stim/rb09.png',
'./stim/rb08.png',
'./stim/rb11.png',
'./stim/rb05.png',
'./stim/rb04.png',
'./stim/rb10.png',
'./stim/rb06.png',
'./stim/rb12.png',
'./stim/rb07.png',
'./stim/rb03.png',
'./stim/rb02.png',
'./stim/rb01.png',
'./stim/bb03.png',
'./stim/bb02.png',
'./stim/bb01.png',
'./stim/bb05.png',
'./stim/bb04.png',
'./stim/bb06.png',
'./stim/bb07.png']
/* preload images */
var preload = {
  type: jsPsychPreload,
  images: files
};
timeline.push(preload);

/* define welcome message trial */
var welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

/* define instructions trial */
var instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
  <h1>Welcome to our online experiment!</h1>
	<p>We are conducting a study on social bot recognition and would like to invite you to participate.</p>
	<p>The purpose of this study is to investigate how well people can distinguish between real and fake social media accounts, known as social bots. Social bots are automated programs that mimic human behavior on social media platforms, and they can be used for various purposes, such as spreading misinformation or influencing public opinion.</p>
	<p>Your participation in this study is voluntary, and your responses will be anonymous and confidential. The experiment will take approximately 15-20 minutes to complete.</p>
	<p>If you have any questions or concerns, please contact us at [insert contact email]. Thank you for your participation!</p>
</body>
    <p>Press any key to begin.</p>
  `,
  post_trial_gap: 2000
};
timeline.push(instructions);

/* define trial stimuli array for timeline variables */
var test_stimuli = [
  {stimulus:" stim/bb09.png", correct_response:"f"},
{stimulus:" stim/bb08.png", correct_response:"f"},
{stimulus:" stim/rh01.png", correct_response:"j"},
{stimulus:" stim/rb09.png", correct_response:"f"},
{stimulus:" stim/rb08.png", correct_response:"f"},
{stimulus:" stim/rb11.png", correct_response:"f"},
{stimulus:" stim/rb05.png", correct_response:"f"},
{stimulus:" stim/rb04.png", correct_response:"f"},
{stimulus:" stim/rb10.png", correct_response:"f"},
{stimulus:" stim/rb06.png", correct_response:"f"},
{stimulus:" stim/rb12.png", correct_response:"f"},
{stimulus:" stim/rb07.png", correct_response:"f"},
{stimulus:" stim/rb03.png", correct_response:"f"},
{stimulus:" stim/rb02.png", correct_response:"f"},
{stimulus:" stim/rb01.png", correct_response:"f"},
{stimulus:" stim/bb03.png", correct_response:"f"},
{stimulus:" stim/bb02.png", correct_response:"f"},
{stimulus:" stim/bb01.png", correct_response:"f"},
{stimulus:" stim/bb05.png", correct_response:"f"},
{stimulus:" stim/bb04.png", correct_response:"f"},
{stimulus:" stim/bb06.png", correct_response:"f"},
{stimulus:" stim/bb07.png", correct_response:"f"},
];

/* define fixation and test trials */
var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  },
  data: {
    task: 'fixation'
  }
};

var test = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: ['f', 'j'],
  data: {
    task: 'response',
    correct_response: jsPsych.timelineVariable('correct_response')
  },
  on_finish: function(data){
    data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
  }
};

/* define test procedure */
var test_procedure = {
  timeline: [fixation, test],
  timeline_variables: test_stimuli,
  repetitions: 1,
  randomize_order: true
};
timeline.push(test_procedure);

/* define debrief */
var debrief_block = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {

    var trials = jsPsych.data.get().filter({task: 'response'});
    var correct_trials = trials.filter({correct: true});
    var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
    var rt = Math.round(correct_trials.select('rt').mean());

    return `<p>You responded correctly on ${accuracy}% of the trials.</p>
      <p>Your average response time was ${rt}ms.</p>
      <p>Press any key to complete the experiment. Thank you!</p>`;

  }
};
timeline.push(debrief_block);

/* start the experiment */
jsPsych.run(timeline);

