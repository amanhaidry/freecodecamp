const { useState, useEffect, } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const generateOtp=()=>{
    let currOtp = "";
    for(let i=0; i<6; i++){
      let currDigit = Math.floor(Math.random()*10);
      currOtp += currDigit;
    }
    setOtp(currOtp);
    setTimeLeft(5);
  }

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTimeLeft((prev)=>{
        if(prev<=1){
          clearInterval(intervalId);
          return 0;
        }

        return prev-1;
      });
    },1000)

    return ()=>{clearInterval(intervalId)};
  },[otp])

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp?otp:"Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="polite">{!otp?"":timeLeft>0?`Expires in: ${timeLeft} seconds`:"OTP expired. Click the button to generate a new OTP."}</p>
    <button id="generate-otp-button" onClick={generateOtp} disabled={timeLeft>0}>Generate OTP</button>
    </div>
  )
};