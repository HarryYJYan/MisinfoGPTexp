
//const fs = require('fs');
//const path = require('path');

// Define the directory path
//const dirPath = path.join(__dirname, '.', 'stim');

// Read the directory contents and filter for files
//const files = fs.readdirSync(dirPath).filter(file => {
  //return fs.statSync(path.join(dirPath, file)).isFile();
//});

// Map the filenames to their full paths
//var filePaths = files.map(file => {
//  return path.join(dirPath, file);
//});

//console.log(filePaths);

var filePaths = ['./stim/5_SUPREME COURT GRANTS BLACK MAN “40 ACRES OF LAND AND A MULE”2022-08-26-17-20-53.jpg',
 './stim/59_trump-ally-lindsey-graham-must-testify-in-georgia-grand-jury-investigation-federal-judge-rules2022-09-03-21-26-53.jpg',
 './stim/1_“Blacks 4 Trump” Group Caught Using Blackface To Pretend They Have Black Members2022-08-26-17-22-32.jpg',
 './stim/19_WOW! Biden Caught Fake Driving — Someone Else Is Steering Vehicle — It Was All a Stunt! — VIDEO and PICS2022-08-26-23-49-09.jpg',
 './stim/2_Biden Buys Film Rights To New ‘MAD’ Movie Just To Piss Off Trump2022-08-26-00-30-46.jpg',
 './stim/11_biden-orders-arrest-of-black-leaders-while-his-elites-mock-appalachia-flood-victims2022-08-24-21-32-47.jpg',
 './stim/17_QAnon Wants You To Pee On Your Kids So Democrats Can’t Smell Their Youthful Blood2022-08-26-17-25-36.jpg',
 './stim/68_melania-trump-felt-violated-by-fbi-agents-contaminating-her-bedroom-during-mar-lago-raid-report-says2022-09-03-21-55-27.jpg',
 './stim/70_trump-revives-claims-biden-has-dementia-after-anti-maga-speech2022-09-03-22-43-07.jpg',
 './stim/69_trump-pledges-to-pardon-some-jan-capitol-riot-defendants2022-09-03-22-42-20.jpg',
 './stim/4_Steve Bannon Is Now Selling “Freedom Yogurt” Made Of White People’s Semen2022-08-26-17-24-12.jpg',
 './stim/66_hunter-biden-secured-dinner-for-client-at-chinese-embassy-following-luncheon-hosted-by-vp-biden-emai2022-09-03-22-37-08.jpg',
 './stim/6_Trump Is Suing His Grandchildren For Violating NDA’s He Made Them Sign As Infants2022-08-26-17-29-37.jpg',
 './stim/18_Special Forces Arrest Deep State Dr. Anthony Fauci2022-08-25-18-22-35.jpg',
 './stim/67_mccarthy-says-democracy-is-on-the-ballot-in-midterms-blaming-dems-for-attacking-freedoms2022-09-03-22-45-42.jpg',
 './stim/63_border-patrol-agents-arrest-dozens-of-illegal-immigrant-criminals-gang-members2022-09-03-22-36-49.jpg',
 './stim/9_Trump Threatens To Sue Founding Fathers2022-08-26-00-46-37.jpg',
 './stim/54_digital-world-acquisition-corp-urges-shareholders-to-delay-merger-with-trump-media2022-09-03-21-36-58.jpg',
 './stim/3_Staring At Hard Times, Tucker Carlson May Be Forced To Sell Bow Tie Collection2022-08-26-00-49-36.jpg',
 './stim/58_the-dangers-of-trump-prosecution-syndrome2022-09-03-21-56-30.jpg',
 './stim/56_garland-perilous-path-to-prosecuting-trump2022-09-03-21-56-50.jpg',
 './stim/51_biden-administration-cancels-another-9-billion-in-student-loan-debt-for-former-for-profit-college-st2022-09-03-22-36-58.jpg',
 './stim/10_Trump Voter Wants Taco Bell Shut Down For ‘Being Too Mexican’2022-08-26-00-31-55.jpg',
 './stim/20_YOKO ONO_ “I HAD AN AFFAIR WITH HILLARY CLINTON IN THE ’70S”2022-08-26-17-33-06.jpg',
 './stim/64_democratic-rep-sean-patrick-maloney-has-history-of-employing-convicts2022-09-03-22-42-10.jpg',
 './stim/13_Delta Force Arrests Chelsea Clinton2022-08-26-00-47-43.jpg',
 './stim/61_biden-anti-maga-speech-was-ridiculous-campaign-pac-chair2022-09-03-22-39-27.jpg',
 './stim/12_breaking-hillary-clinton-found-dead-under-suspicious-circumstances2022-04-07-21-30-23.jpg',
 './stim/60_trump-truth-social-barred-from-google-play-store-over-content-moderation-concerns2022-09-03-21-55-19.jpg',
 './stim/57_is-there-such-thing-as-joe-biden-superfan2022-09-03-22-06-29.jpg',
 './stim/55_ex-nypd-officer-sentenced-to-record-10-years-for-jan-riot2022-09-03-21-20-53.jpg',
 './stim/15_ilhan omar spits on the tomb.png',
 './stim/62_bill-bennett-on-falling-reading-and-math-scores-devastation-is-the-right-word2022-09-03-22-38-35.jpg',
 './stim/16_malia obama arrested again.png',
 './stim/8_Trump Routinely Forced Staffers To Shred And Eat White House Documents2022-08-26-17-35-30.jpg',
 './stim/65_gig-workers-tire-of-waiting-for-action-from-biden-white-house2022-09-03-22-01-12.jpg',
 './stim/52_biden-has-tamped-down-talk-of-primary-challenge-for-now2022-09-03-22-00-49.jpg',
 './stim/14_f_Kamala military are cowards.png',
 './stim/7_Trump Orders Americans To Stop Eating Chinese Food2022-08-26-01-07-25.jpg',
 './stim/53_biden-warns-that-american-values-are-under-assault-by-trump-led-extremism2022-09-03-22-04-10.jpg']

jsPsych.randomization.shuffle(filePaths);


function createTrial(img) {
    var trial = {
      type: jsPsychSurveyLikert,
      questions: [
        {
          prompt: 'Do you think this headline is accurate?',
          labels: ["Yes", "No"],
          required: true
        },
    ],
      scale_width: 200,
      preamble: '<img src="' + img + '"><br>',
    };
    return trial;
  }

for (const img of filePaths) {
  var trial = createTrial(img);
  trial.trial_id = "trial_" + img.split("_")[0];
  timeline.push(trial)
}