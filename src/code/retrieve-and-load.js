// Image Viewer-VR-Retrieve and Load.test-spec.js
// XA Cardiac Cath
const studyA = Study(require('@studies/1.3.6.1.4.1.5962.99.1.1267762035.376104425.1556045955955.659.0.json'));

VerticalRegression(() => {
  Epic("IMGVIEWER-15")
  Story("IMGVIEWER-24")
  Requirements('1497453', 'https://jazz.cerner.com:9443/rm/resources/_Cak6IEEIEem5Lbs4CCemtg')
  Requirements('1497457', 'https://jazz.cerner.com:9443/rm/resources/_cojC4EEIEem5Lbs4CCemtg')
  Requirements('1497461', 'https://jazz.cerner.com:9443/rm/resources/_uhk58EEIEem5Lbs4CCemtg')
  Requirements('1497459', 'https://jazz.cerner.com:9443/rm/resources/_nErqkEEIEem5Lbs4CCemtg')

  Description(`Purpose: Test basic retrieval and load of images Prequisites: 1. Access to Image Viewer 2. Test data available in whichever environment the tests are being run Study A: ${studyA.toString()}`)

  Step(`Load Application & Log In`, () => {
    ExpectedResult(`User is logged in and application is loaded`);
    loadApplication();
  })

  Step(`Load Study A and Load Series`,() => {
    ExpectedResult(`
    Study A ${studyA.studyDescription} is loaded`);
    const seriesInstanceUID = studyA.seriesInstanceUID[0];
    loadStudy(studyA.studyInstanceUID, studyA.numberOfStacks);
    loadSeries(seriesInstanceUID);
    waitForSeriesToCache(seriesInstanceUID);
    hideCineControl(seriesInstanceUID);
    checkViewport(seriesInstanceUID);
  })
})
