class Mobile{
    NameOfMobile:string;
    CameraDetails:number;
    DisplayDetails:number;
    LaunchDate:number;
    
    constructor(){
        this.NameOfMobile="oneplus";
        }
        GetDisplayDetails=function() {
            console.log("LTPS IPS LCD")
        }
        GetCameraDetails=function(){
            console.log("Dual-LED flash, panorama, HDR")
        }
        GetLaunchDate=function(){
            console.log("Launced in 2008, June")
        
        }
    }
    
    class oneplusone extends Mobile{
    
        constructor(){
            super();
            
    
        }
        GetDisplayDetails = function() {
            console.log("5.5 inches, 83.4 cm2")
        }
        GetCameraDetails = function(){
            
            console.log("Dual-LED flash, panorama, HDRclear")
        }
        GetLaunchDate = function(){
            console.log("Launched in 2014")
        }
    
    }
    
    let mobile = new oneplusone();
    mobile.NameOfMobile="oneplus";
    console.log("First Class");
    console.log(`this mobile is ${mobile.NameOfMobile}one`)
    mobile.GetDisplayDetails();
    mobile.GetCameraDetails();
    mobile.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")
    
    class oneplustwo extends oneplusone{
        constructor(){
            super()
        }
        GetDisplayDetails=function(){
            console.log("5.5 inches, 83.4 cm2")
        }
        GetCameraDetails=function(){
            console.log("Dual-LED flash, panorama")
        }
        GetLaunchDate=function(){
            console.log("iphone is launched in 2015")
        }
    }
    let mobile1 = new oneplustwo ();
    mobile1.NameOfMobile="oneplustwo";
    console.log("Second Class");
    console.log(`this mobile ${mobile1.NameOfMobile}`)
    mobile1.GetDisplayDetails();
    mobile1.GetCameraDetails();
    mobile1.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")

    class oneplusnord extends oneplustwo{
        constructor(){
            super()
        }
        GetDisplayDetails=function(){
            console.log("6.44 inches, 100.6 cm2")
        }
        GetCameraDetails=function(){
            console.log("Dual-LED flash, HDR, panorama")
        }
        GetLaunchDate=function(){
            console.log("iphone is launched in 2020")
        }
    }
    let mobile2 = new oneplusnord ();
    mobile2.NameOfMobile="oneplusnord";
    console.log("third Class");
    console.log(`this mobile ${mobile2.NameOfMobile}`)
    mobile2.GetDisplayDetails();
    mobile2.GetCameraDetails();
    mobile2.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")

    class oneplus9pro extends oneplusnord{
        constructor(){
            super()
        }
        GetDisplayDetails=function(){
            console.log("6.7 inches, 108.4 cm2")
        }
        GetCameraDetails=function(){
            console.log("Hasselblad Color Calibration, dual-LED flash, HDR, panorama")
        }
        GetLaunchDate=function(){
            console.log("iphone is launched in 2021")
        }
    }
    let mobile3 = new oneplus9pro ();
    mobile3.NameOfMobile="oneplus9pro";
    console.log("fourth Class");
    console.log(`this mobile ${mobile3.NameOfMobile}`)
    mobile3.GetDisplayDetails();
    mobile3.GetCameraDetails();
    mobile3.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")

    class oneplus9R extends oneplus9pro{
        constructor(){
            super()
        }
        GetDisplayDetails=function(){
            console.log("6.55 inches, 103.6 cm2")
        }
        GetCameraDetails=function(){
            console.log("Dual-LED flash, HDR, panorama")
        }
        GetLaunchDate=function(){
            console.log("iphone is launched in April 2021")
        }
    }
    let mobile4 = new oneplus9R ();
    mobile4.NameOfMobile="oneplus9R";
    console.log("fifth Class");
    console.log(`this mobile ${mobile4.NameOfMobile}`)
    mobile4.GetDisplayDetails();
    mobile4.GetCameraDetails();
    mobile4.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")

    class oneplus8 extends oneplus9R{
        constructor(){
            super()
        }
        GetDisplayDetails=function(){
            console.log("Fluid AMOLED, 90Hz")
        }
        GetCameraDetails=function(){
            console.log("Dual-LED flash, HDR, panorama")
        }
        GetLaunchDate=function(){
            console.log("iphone is launched in April 2020")
        }
    }
    let mobile5 = new oneplus8 ();
    mobile5.NameOfMobile="oneplus8";
    console.log("sixth Class");
    console.log(`this mobile ${mobile5.NameOfMobile}`)
    mobile5.GetDisplayDetails();
    mobile5.GetCameraDetails();
    mobile5.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")

    class oneplus8R extends oneplus8{
        constructor(){
            super()
        }
        GetDisplayDetails=function(){
            console.log("Fluid AMOLED, 90Hz")
        }
        GetCameraDetails=function(){
            console.log("Dual-LED flash, HDR, panorama")
        }
        GetLaunchDate=function(){
            console.log("iphone is launched in April 2021")
        }
    }
    let mobile6 = new oneplus8R ();
    mobile6.NameOfMobile="oneplus8R";
    console.log("seventh Class");
    console.log(`this mobile ${mobile6.NameOfMobile}`)
    mobile6.GetDisplayDetails();
    mobile6.GetCameraDetails();
    mobile6.GetLaunchDate();
    console.log("------------------>>>>>>>>>>>>>>>")







