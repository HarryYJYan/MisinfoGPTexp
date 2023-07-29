

var jsPsych = initJsPsych({
    show_progress_bar: true,
    on_finish: function() {
      jsPsych.data.displayData();
    }
  });

var timeline = [];

var welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<h1>Welcome to Artificial Intelligence(AI) and Political News study</h1>
<p>Press any key to begin.</p>`,
  };

  timeline.push(welcome);

  var introduction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<p>We are conducting a study on user use artificial intelligence to engage with political news and would like to invite you to participate.</p><p>Your participation in this study is voluntary, and your responses will be anonymous and confidential. The experiment will take approximately 15-20 minutes to complete.</p><p>If you have any questions or concerns, please contact us at harryan@iu.edu. Thank you for your participation!</p><p>Press any key to continue</p>',
  };

  timeline.push(introduction);

  var fullscreen_trial = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
  };
  
timeline.push(fullscreen_trial);

  var preload = {
    type: jsPsychPreload,
    auto_preload: true
  };

timeline.push(preload)