var browsercheck_instruction = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<p>Before we proceed to the experiment, we need to check your browswer condition.</p>
      <p>The minimum width is set to 1000px and the minimum height to 600px.</p>
      <p>Make your window too small now if you want to test the minimum size features.</p>`,
    choices: ['Continue']
  };


var browser_check_trial = {
    type: jsPsychBrowserCheck,
    minimum_width: 1000,
    minimum_height: 600,
  };
  
var results_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
      var browser_check_data = jsPsych.data.get().last(1).values()[0];
      var html = `<div style="width:700px; text-align: left">
        <p>Browser check results</p>
        <p>Window size: ${browser_check_data.width}px x ${browser_check_data.height}px.</p>
        <p>Browser: ${browser_check_data.browser} version ${browser_check_data.browser_version}</p>
        <p>OS: ${browser_check_data.os}</p>
        <p>Mobile device: ${browser_check_data.mobile}</p>
        <p>Frame rate: ${browser_check_data.vsync_rate}</p>
        <p>WebAudio API support: ${browser_check_data.webaudio}</p>
        <p>Fullscreen API support: ${browser_check_data.fullscreen}</p>
        <p>Webcam support: ${browser_check_data.webcam}</p>
        <p>Microphone support: ${browser_check_data.microphone}</p>
      `
      return html;
    },
    choices: ['Done']
  }
  timeline.push(browsercheck_instruction);
  timeline.push(browser_check_trial);
  timeline.push(results_trial);

