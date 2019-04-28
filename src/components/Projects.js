import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Appbar from './Appbar';

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiStepLabel: {
      // Name of the rule
      root: {
        border: 0,
        color: 'black',
        height: 48,
        fontSize: 50,
        fontFamily: 'Hanzipen SC'
      }
    }
  }
});

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  },
  text: {
    fontFamily: 'Hanzipen SC',
    fontSize: '20px',
    margin: '30px'
  },
  stepLabel: {
    fontSize: '30px'
  },
  title: {
    fontFamily: 'Hanzipen SC',
    fontSize: '30px',
    textAlign: 'center'
  }
});

// function getSteps() {
//   return ['item1', 'item2', 'item3'];
// }

function getStepContent(step) {
  switch (step) {
    case 0:
      return `一個以色澤辨識為核心的系統，用途為東部金針花農戶預測金針花的含水量，藉此讓農戶有效改善金針花製程的品質。前端是以Laravel框架去開發的php網頁，後端的色澤分析是利用OpenCV作為工具，並且讓spark作為一個運算框架，用機器學習的方式訓練金針花製程的資料最終預測含水量`;
    case 1:
      return '一款用以改善用藥問題的Android App，結合iBeacon讓用藥者免去忘記帶藥的問題，也針對慢性疾病的患者提供紀錄血糖血壓的功能，並且繪製圖表讓患者家屬可以隨時了解患者狀況。系統結合許多AWS平台的服務';
    case 2:
      return `一個提供Apple進貨商進行進貨及銷貨的系統，擁有一般電子商務網站所具備的功能，例如：登入、購物車、搜尋、評分、管理者頁面，本系統為大三完成的小專題，以MVC架構為核心利用JSP進行開發`;
    default:
      return 'Unknown step';
  }
}

class Projects extends React.Component {
  state = {
    activeStep: 0
  };

  // handleNext = () => {
  //   this.setState(state => ({
  //     activeStep: state.activeStep + 1
  //   }));
  // };
  //
  // handleBack = () => {
  //   this.setState(state => ({
  //     activeStep: state.activeStep - 1
  //   }));
  // };
  //
  // handleReset = () => {
  //   this.setState({activeStep: 0});
  // };

  render() {
    const {classes} = this.props;
    // const steps = getSteps();
    const {activeStep} = this.state;

    return (<div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Appbar/>
        <center style={{backgroundColor:'transparent'}}>
          <img src={require('../assets/img/project.png')} height="128" width="128" alt="project" style={{
              margin: 50
            }}/>
          <Typography className={classes.title}>My Side Projects list</Typography>
          <hr style={{
              backgroundColor: 'transparent',
              height: 3,
              border:0
            }}/>
        </center>
        <Stepper activeStep={activeStep} orientation="vertical">

          <Step active={true}>
            <StepLabel>金針花色澤辨識系統</StepLabel>

            <StepContent>
              <Button href="https://github.com/YuanMaSa/Lily"><img src={require('../assets/img/GitHub-Mark-120px-plus.png')} height="30" width="30" alt="github"/></Button>
              <Button href="https://ppt.cc/fsXEmx"><img src={require('../assets/img/youtube-brands.svg')} height="30" width="30" alt="youtube"/></Button>
              <Typography className={classes.text}>{getStepContent(0)}</Typography>
              <img src={require('../assets/img/lily.png')} alt="lily"/>
            </StepContent>
          </Step>
          <Step active={true}>
            <StepLabel>MineDicine吾藥可救(全國資訊應用服務創新競賽榮獲第三名)</StepLabel>
            <StepContent>
              <Button href="https://github.com/YuanMaSa/MedicineAPP"><img src={require('../assets/img/GitHub-Mark-120px-plus.png')} height="30" width="30" alt="github"/></Button>
              <Button href="https://ppt.cc/f5hqOx"><img src={require('../assets/img/youtube-brands.svg')} height="30" width="30" alt="youtube"/></Button>
              <Typography className={classes.text}>{getStepContent(1)}</Typography>
              <img src={require('../assets/img/app1.png')} height="423" width="423" alt="app1"/>
              <img src={require('../assets/img/app2.png')} height="423" width="423" alt="app2"/>
              <img src={require('../assets/img/app3.png')} height="423" width="423" alt="app3"/>

            </StepContent>
          </Step>
          <Step active={true}>
            <StepLabel>3C進貨與銷貨系統</StepLabel>
            <StepContent>
              <Button href="https://github.com/YuanMaSa/SA_project"><img src={require('../assets/img/GitHub-Mark-120px-plus.png')} height="30" width="30" alt="github"/></Button>
              <Typography className={classes.text}>{getStepContent(2)}</Typography>
              <img src={require('../assets/img/cart.png')} alt="cart"/>

            </StepContent>
          </Step>

        </Stepper>
      </MuiThemeProvider>

    </div>);
  }
}

Projects.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Projects);
