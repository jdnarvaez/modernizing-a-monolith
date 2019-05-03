// Import React
import React from 'react';
import styled from '@emotion/styled';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  Fill
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

import {
  GradientDarkgreenGreen,
  GradientLightgreenGreen,
  GradientOrangeRed,
  GradientPinkBlue,
  GradientPinkRed,
  GradientPurpleOrange,
  GradientPurpleRed,
  GradientPurpleTeal,
  GradientSteelPurple,
  GradientTealBlue,
  RadialGradient,
  LinearGradient
} from '@vx/gradient';

import Theme from './Theme';
import SlideBackground from './SlideBackground';

// Require CSS
require('normalize.css');
require('./Presentation.css');
require('./prism.css');

export default class Presentation extends React.Component {
  componentDidMount() {
    const component = this;

    function resizer() {
      component.forceUpdate();
    }

    this.setState({ resizer : resizer });
    window.addEventListener('resize', resizer)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.state.resizer)
  }

  render() {
    const contentWidth = Math.round(.6 * innerWidth);
    const contentHeight = innerHeight / 2;
    const pinkRedBackground          = (<SlideBackground gradient={<GradientPinkRed id="GradientPinkRed" />} gradientId="GradientPinkRed"/>);
    const redPinkBackground          = (<SlideBackground gradient={<LinearGradient from={'#FF7676'} to={'#F54EA2'}id="GradientRedPink" />} gradientId="GradientRedPink"/>);
    const lightGreenGreenBackground  = (<SlideBackground gradient={<GradientLightgreenGreen id="GradientLightgreenGreen" />} gradientId="GradientLightgreenGreen"/>);
    const purpleRedBackground        = (<SlideBackground gradient={<GradientPurpleRed id="GradientPurpleRed" />} gradientId="GradientPurpleRed"/>);
    const orangeRedBackground        = (<SlideBackground gradient={<GradientOrangeRed id="GradientOrangeRed" />} gradientId="GradientOrangeRed"/>);

    return (
      <div>
        {pinkRedBackground}
        <Deck
          transition={['fade']}
          transitionDuration={500}
          theme={Theme}
          progress="bar"
          contentHeight={contentHeight}
          contentWidth={contentWidth}
        >
          <Slide transition={['fade']} style={{ position : 'relative' }}>
            {pinkRedBackground}
            <Heading size={4} textColor="primary" caps fit={true}>
              MODERNIZING A
            </Heading>
            <Heading size={1} textColor="secondary" caps fit={true}>
              MONOLITH
            </Heading>
            <Heading size={6} textColor="tertiary" caps fit={true}>
              scaling down a mountain
            </Heading>
            <svg x="0px" y="0px" width="415.259px" height="415.259px" viewBox="0 0 415.259 415.259" style={{ width : '100px', height : '100px', fill : Theme.screen.colors.secondary, marginTop : '25px' }}>
               <g>
                 <path d="M327.073,323.196L174.091,90.426c-3.1-4.718-7.795-7.423-12.877-7.423c-5.209,0-9.955,2.811-13.023,7.712L2.671,323.26
                   c-3.166,5.062-3.535,10.572-1.013,15.127c2.522,4.556,7.392,7.166,13.36,7.166h299.995c6.015,0,10.881-2.633,13.358-7.225
                   C330.848,333.736,330.375,328.223,327.073,323.196z M161.304,101.234c1.529,0,2.417,1.472,2.417,1.472l92.72,138.025
                   c5.974,10.752,1.974,14.086-9.36,3.086c0,0-33.562-38.944-46.108-50.578c-3.15-2.921-9.553-3.67-13.12-1.275
                   c-9.288,6.233-25.457,21.991-34.852,28.063c-3.607,2.332-8.505,0.328-9.525-3.847c-3.373-13.792-6.196-42.208-9.754-55.955
                   c-1.076-4.159-5.102-4.926-8.567-2.387c-0.858,0.629-2.687,1.727-3.603,2.268c-1.06,0.625-0.469-0.259-0.469-0.259
                   l37.937-57.292C159.018,102.558,159.708,101.234,161.304,101.234z"/>
                 <path d="M412.619,290.749L271.834,76.537c-2.854-4.341-7.173-6.831-11.852-6.831c-4.793,0-9.161,2.587-11.983,7.098
                   l-29.411,46.999c0,0-1.099,1.681-0.247,3.573c0.951,2.113,3.63,5.949,5.093,7.748c1.142,1.401,2.588-0.974,2.588-0.974
                   l32.199-48.845c0,0,0.873-1.301,1.847-1.301c1.109,0,1.947,1.386,1.947,1.386l91.624,135.562
                   c2.603,3.782-4.281,3.799-10.285-1.016c-9.071-7.274-27.021-22.074-36.116-29.319c-3.094-2.464-8.74-3.301-12.073-1.174
                   c-4.911,3.135-16.602,12.289-21.366,16.683c-2.557,2.357-0.692,4.572-0.692,4.572l64.075,97.496c0,0,1.812,3.129,4.688,3.129
                   c14.914,0,59.656,0,59.656,0c5.532,0,10.015-2.424,12.293-6.648C416.095,300.45,415.658,295.374,412.619,290.749z"/>
               </g>
            </svg>
          </Slide>

          <Slide transition={['fade']}>
            {redPinkBackground}
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" margin={10}>
                  About Me
                </Heading>
                <div><br/></div>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                      juan narvaez
                    </Heading>
                    <Heading size={5} caps textColor="quaternary" margin={10} fit={true}>
                      lead software engineer
                    </Heading>
                  </div>
                </Appear>
                <div><br/></div>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps fit={true}>
                    Started at Cerner out of graduate school
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps fit={true}>
                    Worked on diagnostic and referential imaging solutions for 6 years
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps fit={true}>
                    Moved to Apple to work on the Transit project
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps fit={true}>
                    4 years later came back to Cerner to work on medical imaging
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" margin={10} fit={true}>
                  About this talk
                </Heading>
                <Appear>
                  <Heading size={6} textColor="secondary" margin={20} caps>
                    converting a large solution to a web app
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    can we even do this?
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    breaking components down
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    prioritizing functionality
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    streamlining development
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    creating building blocks
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" margin={10} fit={true}>
                  About the app
                </Heading>
                <Appear>
                  <Heading size={6} textColor="secondary" margin={20} caps>
                    FDA 510K regulated medical imaging solution
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    22 part 3500+ page DICOM standard
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    6 million lines of code
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    native code | java code
                  </Heading>
                </Appear>
                <Appear>
                  <div>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    run on high performance workstations
                  </Heading>
                  <div>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 444.462 444.462" style={{ fill : Theme.screen.colors.primary, transform : 'scale(.25) translate(0, -150%)' }}>
                  <g>
                    <path d="M317.166,119.796H127.297c-4.143,0-7.5,3.358-7.5,7.5v189.869c0,4.142,3.357,7.5,7.5,7.5h189.869
                      c4.143,0,7.5-3.358,7.5-7.5V127.296C324.666,123.154,321.309,119.796,317.166,119.796z M309.666,309.666H134.797V134.796h174.869
                      V309.666z"/>
                    <path d="M185.887,266.076h72.689c4.143,0,7.5-3.358,7.5-7.5v-72.689c0-4.142-3.357-7.5-7.5-7.5h-72.689c-4.143,0-7.5,3.358-7.5,7.5
                      v72.689C178.387,262.718,181.744,266.076,185.887,266.076z M193.387,193.386h57.689v57.689h-57.689V193.386z"/>
                    <path d="M305.524,15c6.96,0,10.082-9.068,4.637-13.389c-5.408-4.292-13.535,0.832-11.948,7.579
                      C299.004,12.547,302.068,15,305.524,15z"/>
                    <path d="M143.104,430.73c-2.454-1.616-5.649-1.661-8.146-0.113c-2.891,1.792-4.211,5.471-3.135,8.698
                      c0.978,2.93,3.715,5.015,6.809,5.138c3.191,0.127,6.143-1.826,7.299-4.794C147.185,436.437,146,432.636,143.104,430.73z"/>
                    <path d="M436.962,188.086c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296v-26.645h82.296c4.143,0,7.5-3.358,7.5-7.5
                      s-3.357-7.5-7.5-7.5h-82.296v-5.392c0-19.99-16.264-36.253-36.254-36.253h-5.392V31.6c0-4.142-3.357-7.5-7.5-7.5
                      s-7.5,3.358-7.5,7.5v58.196h-26.645V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-26.645V7.5
                      c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-26.646V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-26.645
                      V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-5.392c-19.99,0-36.253,16.263-36.253,36.253v5.392H7.5
                      c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5
                      c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5
                      c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v5.392c0,19.99,16.263,36.253,36.253,36.253h5.392v58.197
                      c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-58.197h26.645v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296h26.646
                      v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296h26.645v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296
                      h26.645v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296h5.392c19.99,0,36.254-16.263,36.254-36.253v-5.392h82.296
                      c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296v-26.645h82.296c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296
                      v-26.645h82.296c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296v-26.645H436.962z M339.666,318.412
                      c0,11.719-9.534,21.253-21.254,21.253H126.05c-11.719,0-21.253-9.534-21.253-21.253V126.05c0-11.719,9.534-21.253,21.253-21.253
                      h192.362c11.72,0,21.254,9.534,21.254,21.253V318.412z"/>
                  </g>
                  </svg>
                  </div>
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  so
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  where
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  do we start?
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  what are our
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  concerns
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  with the project and its scope?
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={4} textColor="primary" margin={20} caps>
                  feature requirements
                </Heading>
                <Appear>
                  <Heading size={5} textColor="secondary" margin={20} caps fit={true}>
                    resourcing
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    technology
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} textColor="secondary" margin={20} caps fit={true}>
                    testing
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    scale of data
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={require('./images/MRI_BRAIN.png')} transition={['slide', 'zoom', 'fade', 'spin']} bgDarken={.2}>
            <Layout>
              <Fill>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    156+ tools & features
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    sub second display time
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    30+ FPS video
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade', 'slide']}>
            {redPinkBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  sounds like a lot of
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  work
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  right?
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={4} textColor="primary" margin={20} caps>
                  start with less configuration
                </Heading>
                <Appear>
                  <Heading size={5} textColor="secondary" margin={20} caps fit={true}>
                    basic functionality
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    prune the list of features
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} textColor="secondary" margin={20} caps fit={true}>
                    make everything reusable
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} textColor="primary" margin={20} caps>
                    even requirements
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  use this as an
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  opportunity
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  to streamline and prioritize the solution
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  we're probably going to need a
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  large
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  team of talented individuals
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  too bad
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  we have a team of 2
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={10}>
                    and we might be phoning in the talent
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  start
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  simple
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  with the smallest piece of basic functionality
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={10}>
                    not mvp
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']} bgColor={'black'}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/MRI_BRAIN.png')}/>
            </div>
          </Slide>

          <Slide transition={['fade']} bgColor={'black'}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/viewport_gadget.png')}/>
            </div>
          </Slide>

          <Slide transition={['fade']} bgColor={'black'}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/viewport_inner.png')}/>
            </div>
          </Slide>

          <Slide transition={['fade']} bgColor={'black'}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/brain.png')}/>
            </div>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10}>
                  we need to
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  limit
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10}>
                  the goal for each step
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={20}>
                    work on small testable units
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  sketch out high level requirements
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    develop a prototype
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                    evaluate results
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} caps textColor="primary" margin={10}>
                    is it awful?
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    test it
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                    decide the next building block
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  high level requirements
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    view an image
                  </Heading>
                </Appear>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="primary" margin={25}>
                      simple
                    </Heading>
                    <Heading size={5} caps textColor="primary" margin={25}>
                      ✓
                    </Heading>
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  turns out this is kinda
                </Heading>
                <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                  difficult
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  because of the
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  data
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  involved
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={6} textColor="quaternary" margin={20} caps>
                  megabytes per image
                </Heading>
                <Appear>
                  <Heading size={6} textColor="quaternary" margin={20} caps>
                    hundreds of megabytes per stack
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="quaternary" margin={20} caps>
                    gigabytes per study
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="quaternary" margin={20} caps>
                    compression codecs
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="quaternary" margin={20} caps>
                    image transformations
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="quaternary" margin={20} caps>
                    blah blah blah
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']} align={'center flex-start'}>
            {redPinkBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  let's just render
                </Heading>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  one
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  image
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            {redPinkBackground}
            <Layout>
              <Fill>
                <Heading size={6} textColor="secondary" margin={20} caps>
                  (outside of the normalized data model)
                </Heading>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    uncompressed
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    no transformations
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    simpler?
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} textColor="primary" margin={20} caps>
                    maybe
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  once we can do that
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    add another building block
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={25}>
                    decompress images
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={25}>
                    apply transformations
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={25}>
                    add annotations
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={25}>
                    add measurements
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={25}>
                    add filters
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="secondary" margin={10} fit={true}>
                  one
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  at a time
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']} align={'center flex-start'}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  now we need to
                </Heading>
                <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                  test
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  the building blocks as we go
                </Heading>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="primary" margin={25}>
                      let's automate
                    </Heading>
                    <Heading size={5} caps textColor="secondary" margin={25} fit={true}>
                      everything!
                    </Heading>
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  turns out this is also kinda
                </Heading>
                <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                  difficult
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']} align={'center flex-start'}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
              <Heading size={5} caps textColor="primary" margin={30} fit={true}>
                break down tests into
              </Heading>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                      reusable
                    </Heading>
                    <Heading size={5} caps textColor="primary" margin={10}>
                      steps
                    </Heading>
                  </div>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={30} fit={true}>
                    are you noticing a theme?
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="quaternary" margin={10}>
                    load application
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="quaternary" margin={10}>
                    perform login
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="quaternary" margin={10}>
                    load a single image
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="quaternary" margin={10}>
                    move the mouse
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="quaternary" margin={10}>
                    get coffee
                  </Heading>
                </Appear>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="quaternary" margin={10}>
                      simple
                    </Heading>
                    <Heading size={5} caps textColor="quaternary" margin={10}>
                      ✓
                    </Heading>
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  what if we don't know
                </Heading>
                <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                  anything
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  about automated testing frameworks or coding?
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={30}>
                    (this was actually the case)
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={30}>
                    make tests (and code!) as simple and readable as possible
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={30}>
                    develop building blocks!
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            bgColor={'rgb(30, 30, 30)'}
            transition={['slide', 'fade']}
            lang="js"
            code={require("raw-loader!./code/test-harness.js").default}
            ranges={[
              { loc: [0, 61], title: "Anatomy of an automated test", note : 'boy this looks human readable' },
              { loc: [2, 4], title: "Require some things", note : 'what are all these neat symbols' },
              { loc: [4, 5], title: "Describe our test", note : 'super descriptive' },
              { loc: [5, 27], title: "Run an 'it'", note : 'what exactly is an it?' }
            ]}/>

          <Slide transition={['fade', 'slide']}>
            {redPinkBackground}
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" margin={10}>
                  reading code often isn't
                </Heading>
                <Heading caps textColor="secondary" margin={10} fit={true}>
                  fun
                </Heading>
                <Heading size={6} caps textColor="primary" margin={10}>
                  or even straight forward
                </Heading>
                <Appear>
                  <Heading size={6} caps textColor="quaternary" margin={30}>
                    especially if we don't have a shared nomenclature
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade', 'slide']}>
            {lightGreenGreenBackground}
            <BlockQuote>
              <Quote>“It's possible to name everything and to destroy the world.”</Quote>
              <Cite>Kathy Acker</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  write tests in a way that
                </Heading>
                <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                  reflect
                </Heading>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  our ideas of requirements and testing
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    plain declarative language
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']} align={'center flex-start'}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="primary" margin={10} fit={true}>
                  step
                </Heading>
                <Heading size={5} caps textColor="secondary" margin={10}>
                  by
                </Heading>
                <Heading size={6} caps textColor="primary" margin={10} fit={true}>
                  step
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'fade']}>
            {orangeRedBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  leverage open source frameworks
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    webdriver.io
                  </Heading>
                </Appear>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                      write plugins and extensions
                    </Heading>
                    <Heading size={5} caps textColor="secondary" margin={30}>
                      that allow all contributors and consumers to read and understand the test and what is being tested
                    </Heading>
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            bgColor={'rgb(30, 30, 30)'}
            transition={['slide', 'fade']}
            lang="js"
            code={require("raw-loader!./code/retrieve-and-load.js").default}
            ranges={[
              { loc: [0, 61], title: "Anatomy of an automated test", note : 'part deux' },
              { loc: [3, 5], title: "Load our test data", note : 'ignore the wild random numbers' },
              { loc: [5, 6], title: "Describe the kind of test", note : 'Vertical Regression, UI, Hazard, White Box?' },
              { loc: [6, 7], title: "Link our Epic!" },
              { loc: [7, 8], title: "Link some Stories", note : 'jira is pretty neat' },
              { loc: [8, 12], title: "Even link our requirements", note : 'yes that is linked to DNG' },
              { loc: [12, 13], title: "Provide our test description" },
              { loc: [13, 14], title: "Perform test steps" },
              { loc: [14, 15], title: "Specify our expected result" },
              { loc: [15, 16], title: "Call our helper method" },
              { loc: [17, 18], title: "Perform the next step" },
              { loc: [18, 19], title: "Specify our expected result" },
              { loc: [19, 21], title: "Load some data" },
              { loc: [21, 22], title: "Load some more specific data" },
              { loc: [22, 24], title: "Wait for the data to process" },
              { loc: [24, 25], title: "Capture test evidence", note : 'profit!' }
            ]}>
          </CodeSlide>

          <Slide transition={['slide', 'fade']}>
            {lightGreenGreenBackground}
            <Layout>
              <Fill>
                <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                  test helper methods are our building blocks
                </Heading>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    load a study
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={10} fit={true}>
                    load a series
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="secondary" margin={10} fit={true}>
                    do some specific interaction
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={5} caps textColor="primary" margin={10}>
                    once each component is implemented, we can string them together for more complex workflows
                  </Heading>
                </Appear>
                <Appear>
                  <div>
                    <Heading size={5} caps textColor="secondary" margin={25}>
                      simple
                    </Heading>
                    <Heading size={5} caps textColor="secondary" margin={25}>
                      ✓
                    </Heading>
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade', 'slide']} align={'center flex-start'}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" margin={20} fit={true}>
                  dev workflow
                </Heading>
                <Appear>
                  <Heading size={4} caps textColor="primary" margin={20}>
                    write basic requirement
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} caps textColor="quaternary" margin={20}>
                    can we use other requirements as building blocks?
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} caps textColor="secondary" margin={20}>
                    design & derive the testable component
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} caps textColor="quaternary" margin={20}>
                    can we use other components as building blocks?
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} caps textColor="primary" margin={20}>
                    implement the component
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} caps textColor="secondary" margin={20}>
                    implement the test
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={6} caps textColor="quaternary" margin={20}>
                    remember to use our other test helpers
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} caps textColor="primary" margin={20}>
                    add test to ongoing suite
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} caps textColor="secondary" margin={20} fit={true}>
                    run all the tests all the time
                  </Heading>
                </Appear>
                <Appear>
                  <Heading size={4} caps textColor="quaternary" margin={20} fit={true}>
                    monitor test output
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['fade']}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/testing.png')}/>
            </div>
          </Slide>

          <Slide transition={['fade']}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/evidence.png')}/>
            </div>
          </Slide>

          <Slide transition={['fade']}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/test.png')}/>
            </div>
          </Slide>

          <Slide transition={['fade']}>
            <div style={{ width : `${innerWidth}px`, height : `${innerHeight}px`, top : `0px`, left : `0px`, position : `fixed` }}>
              <img style={{ objectFit: 'contain', width : `${innerWidth}px`, height : `${innerHeight}px` }} src={require('./images/imgviewer.png')}/>
            </div>
          </Slide>







          <Slide transition={['fade', 'slide']}>
            {pinkRedBackground}
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" margin={10}>
                  any
                </Heading>
                <Heading caps textColor="secondary" margin={10} fit={true}>
                  questions
                </Heading>
                <Heading size={6} caps textColor="primary" margin={10}>
                  comments, concerns, general criticisms
                </Heading>
                <Heading size={1} caps textColor="secondary" margin={10}>
                  ?
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide', 'zoom', 'fade', 'spin']}>
            {redPinkBackground}
            <Layout>
              <Fill>
                <Heading size={2} caps textColor="primary" margin={10}>
                  please
                </Heading>
                <Heading size={2} caps textColor="primary" margin={10}>
                  leave
                </Heading>
                <Heading caps textColor="secondary" margin={10} fit={true}>
                  feedback
                </Heading>
                <Heading size={6} caps textColor="primary" margin={10}>
                  juan.narvaez@cerner.com
                </Heading>
                <div><br/><br/><br/><br/></div>
                <Heading size={6} caps textColor="quaternary" fit={true}>
                  made with react, @vx, and spectacle
                </Heading>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </div>
    );
  }
}
