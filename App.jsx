import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <body className="">
        {/* section 1 */}
        <sectiion>
        <div className="bg-green-400 h-[44.3rem] w-[95rem]  flex flex-row">
          {/* left side */}
          <div className="bg-slate-50 h-[44.3rem] w-[12rem] grid grid-row-9 grid-flow-row">
            <div className="flex flex-row">
            <img
          className="h-[3rem] w-[8rem]  ml-[0.9rem] mt-[0.2rem] rounded-[2rem]"
          src="Arogya sarthi (1) 2.png"
          alt="instagram"
        />
            </div>
            <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[1rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Overview</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Calender</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[10rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Patient List</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Messages</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Settings</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[6rem] ml-[1.5rem] mt-[15rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Help</p>
                </button>
            <div className=" bg-slate-900 h-[0.1rem] w-[12rem]"></div>
            <div className="flex flex-row">
            <img
          className="h-[4rem] w-[3rem]  ml-[1.5rem] mt-[0rem]"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="instagram"
        />
          <div className="">
          <p className="">Dr. Pooja</p>
          <p className="">Dentist</p>
          </div>
          
            </div>
          </div>
          {/* left side end */}
          {/* right side */}
          <div className=" bg-amber-100 h-[44rem] w-[83rem]">
            {/* top  */}
            <div className=" bg-amber-100 h-[3.8rem] w-[83rem] grid grid-col-4 grid-flow-col">
              <p className="pt-[1rem] ml-[2rem]">Dashboard Overview</p>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[58rem] mt-[0.8rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUOeN30AM5GyUtbi-NjOdHxnIG0SFYEKjA&usqp=CAU"
          alt="instagram"
        />
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
            </div>
            {/* top end */}
            {/* middle */}
            <div className=" bg-slate-900 h-[0.2rem] w-[83rem]"></div>
            {/* middle end */}
            {/* bottom */}
            <div className=" bg-amber-100 h-[40rem] w-[83rem]">
              <div className="bg-amber-100 h-[19.3rem] w-[83rem] flex flex-row">
                <div className=" bg-slate-50 h-[17.5rem] w-[44rem] ml-[1rem] mt-[1rem] mr-[1rem] rounded-[0.2rem]">
                  <p className="ml-[2rem] text-[2rem]">Good Morning , Dr Pooja</p>
                  <div className="bg-slate-50 h-[2.7rem] w-[44rem] grid grid-col-3 grid-flow-col">
                    <p className="ml-[2rem] mt-[0.8rem]">Appointment Statistics</p>
                    <button className="bg-slate-100 h-[2rem] w-[4rem] ml-[15rem] mt-[0.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">30 Days</button>
                    <button className="bg-slate-100 h-[2rem] w-[4rem] ml-[rem] mt-[0.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Weekly</button>
                    <button className="bg-slate-100 h-[2rem] w-[4rem] ml-[rem] mt-[0.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Monthly</button>
                  </div>
                  <div className=" bg-slate-100 h-[12.8rem] w-[44rem] flex flex-row">
                    <div className=" bg-slate-50 h-[12.8rem] w-[4rem] grid grid-row-7 grid-flow-row">
                      <p className="ml-[2.5rem] mt-[0.5rem]">40</p>
                      <p className="ml-[2.5rem] mt-[0.5rem]">30</p>
                      <p className="ml-[2.5rem] mt-[0.5rem]">20</p>
                      <p className="ml-[2.5rem] mt-[0.5rem]">10</p>
                      <p className="ml-[3rem] mt-[0.5rem]">0</p>
                      <p className="ml-[3rem] mt-[0.5rem]">.</p>
                    </div>
                    <div className=" bg-slate-50 h-[12.8rem] w-[40rem]">
                      <div className="bg-slate-50 h-[10.3rem] w-[40rem] flex flex-row">
                      <img
          className="h-[9rem] w-[1rem]  ml-[1.1rem] mt-[0.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[5rem] w-[1rem]  ml-[2.2rem] mt-[4.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[6rem] w-[1rem]  ml-[2.2rem] mt-[3.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[9rem] w-[1rem]  ml-[2.3rem] mt-[0.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[1rem] w-[1rem]  ml-[2.2rem] mt-[8.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[4rem] w-[1rem]  ml-[2.3rem] mt-[5.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[7rem] w-[1rem]  ml-[2.3rem] mt-[2.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[9rem] w-[1rem]  ml-[2.2rem] mt-[0.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[8rem] w-[1rem]  ml-[2.2rem] mt-[1.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[6rem] w-[1rem]  ml-[2.3rem] mt-[3.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[7rem] w-[1rem]  ml-[2.3rem] mt-[2.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <img
          className="h-[9rem] w-[1rem]  ml-[2.2rem] mt-[0.9rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
                      </div>
                      <div className="bg-slate-50 h-[2.5rem] w-[40rem] grid grid-col-7 grid-flow-col">
                        <p className="ml-[1rem] mt-[0.2rem]">01</p>
                        <p className="mt-[0.2rem]">02</p>
                        <p className="mt-[0.2rem]">03</p>
                        <p className="mt-[0.2rem]">04</p>
                        <p className="mt-[0.2rem]">05</p>
                        <p className="mt-[0.2rem]">06</p>
                        <p className="mt-[0.2rem]">07</p>
                        <p className="mt-[0.2rem]">08</p>
                        <p className="mt-[0.2rem]">09</p>
                        <p className="mt-[0.2rem]">10</p>
                        <p className="mt-[0.2rem]">11</p>
                        <p className="mt-[0.2rem]">12</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-50 h-[17rem] w-[34rem]">
                  <div className="bg-amber-100 h-[12rem] w-[34rem] flex flex-row">
                    <div className=" bg-slate-50 h-[10rem] w-[17rem] mt-[1rem] mb-[2rem]">
                    <p className="mt-[0.5rem] ml-[1.5rem] text-[0.9rem]">APPROVAL REQUEST</p>
                  <p className="mt-[-0.1rem] ml-[1.5rem] text-[2.5rem]">26</p>
                  <p className="mt-[-0.5rem] ml-[1.5rem] text-[0.9rem]">Request Waiting to approve</p>
                  <button className="bg-slate-100 h-[2rem] w-[10rem] ml-[2rem] mt-[1.1rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
                    </div>
                    <div className=" bg-slate-50 h-[10rem] w-[17rem] mt-[1rem] ml-[1rem]">
                    <p className="mt-[0.5rem] ml-[1.5rem] text-[0.9rem]">UPCOMING APPOINTMENTS</p>
                  <p className="mt-[-0.1rem] ml-[1.5rem] text-[2.5rem]">26</p>
                  <p className="mt-[-0.5rem] ml-[1.5rem] text-[0.9rem]">Request Waiting to approve</p>
                  <button className="bg-slate-100 h-[2rem] w-[10rem] ml-[2rem] mt-[1.1rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
                    </div>
                  </div>
                  <div className="bg-slate-50 h-[8rem] w-[34rem] mt-[-0.5rem] flex flex-row">
                    <div className="bg-green-50 h-[8rem] w-[17rem]">
                    <p className="mt-[0.5rem] ml-[1.5rem] text-[0.9rem]">HOSPITAL INFORMATION</p>
                    <div className="flex flex-row">
                    <img
          className="h-[1rem] w-[1rem]  ml-[1rem] mt-[0.7rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
                    <p className="mt-[0.5rem] ml-[0.5rem] text-[0.8rem]">Opposite Inox Mall, Sita Burdi , Nagpur</p>
                    </div>
                    <div className="flex flex-row">
                    <img
          className="h-[1rem] w-[1rem]  ml-[1rem] mt-[0.6rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
                    <p className="mt-[0.5rem] ml-[0.5rem] text-[0.8rem]">0712-928521 , 0712-928521</p>
                    </div>
                    <div className="flex flex-row">
                    <img
          className="h-[1rem] w-[1rem]  ml-[1rem] mt-[0.6rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
                    <p className="mt-[0.5rem] ml-[0.5rem] text-[0.8rem]">G-map Location</p>
                    </div>
                    </div>
                    <div className="bg-green-50 h-[8rem] w-[17rem]">
                    <img
          className="h-[6rem] w-[14rem]  ml-[1.5rem] mt-[0.9rem]"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="instagram"
        />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-amber-100 h-[20rem] w-[83rem] flex flex-row mt-[1rem]">
                <div className=" bg-slate-50 h-[18rem] w-[19rem] ml-[1rem]">
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">TOTAL PATIENTS THIS MONTH</p>
                <p className="mt-[-0.5rem] ml-[1.5rem] text-[3rem]">26</p>
                <p className="mt-[-0.5rem] ml-[1.5rem] text-[1.2rem]">Patient Lists</p>
                <div className="bg-slate-300 h-[2rem] w-[15rem] ml-[2rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.5rem] mt-[0.2rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[1rem] mt-[0.1rem] text-[1.125rem]">Bhojraj Padole</p>
        <p className="ml-[1rem] mt-[0.1rem] text-[1.125rem]">09:30</p>

                </div>
                <div className="bg-slate-300 h-[2rem] w-[15rem] ml-[2rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.5rem] mt-[0.2rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[1rem] mt-[0.1rem] text-[1.125rem]">Bhojraj Padole</p>
        <p className="ml-[1rem] mt-[0.1rem] text-[1.125rem]">09:30</p>

                </div>
                <div className="bg-slate-300 h-[2rem] w-[15rem] ml-[2rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.5rem] mt-[0.2rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[1rem] mt-[0.1rem] text-[1.125rem]">Bhojraj Padole</p>
        <p className="ml-[1rem] mt-[0.1rem] text-[1.125rem]">09:30</p>

                </div>
                <button className="bg-slate-100 h-[2rem] w-[10rem] ml-[2rem] mt-[0.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
                </div>
                <div className=" bg-slate-50 h-[18rem] w-[19rem] ml-[1rem]">
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">TOP TREATMENT</p>
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">1. Consultation</p>
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">2. Scaling</p>
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">3. Root Canal</p>
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">4. Bleaching</p>
                <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">5. Wisdom Teeth Removal</p>
                <button className="bg-slate-100 h-[2rem] w-[10rem] ml-[2rem] mt-[1.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
                </div>
                <div className=" bg-slate-50 h-[18rem] w-[19rem] ml-[1rem]">
                  <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">TOTAL PATIENTS THIS MONTH</p>
                  <p className="mt-[0.2rem] ml-[1.5rem] text-[3rem]">26</p>
                  <p className="mt-[0.5rem] ml-[1.5rem] text-[1.2rem]">TOTAL PATIENTS THIS MONTH</p>
                  <p className="mt-[0.2rem] ml-[1.5rem] text-[3rem]">26</p>
                  <button className="bg-slate-100 h-[2rem] w-[10rem] ml-[2rem] mt-[1rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
                </div>
                <div className=" bg-slate-50 h-[9rem] w-[19rem] ml-[1rem]">
                <p className="mt-[0rem] ml-[1rem] text-[1.2rem]">LOGIN STATUS</p>
                <p className="mt-[-0.4rem] ml-[1rem] text-[0.7rem]">Today: 23/10.23 Monday</p>
                <div className="flex flex-row">
                <p className="mt-[0.7rem] ml-[1rem] text-[0.7rem]">Today's Available Timing:</p>
                <button className="bg-slate-100 h-[1rem] w-[3rem] ml-[1rem] mt-[0.6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[0.8rem]">From</button>
                <p className="mt-[0.7rem] ml-[0.5rem] text-[0.7rem]">:</p>
                <button className="bg-slate-100 h-[1rem] w-[3rem] ml-[0.2rem] mt-[0.6rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[0.8rem]">To</button>
                </div>
                <p className="mt-[0.2rem] ml-[1rem] text-[0.7rem]">Login Time: 09:45AM</p>
                <p className="mt-[0.5rem] ml-[1rem] text-[0.7rem]">Current Status: Active</p>
                <p className="mt-[0.5rem] ml-[1rem] text-[0.7rem]">Active Time : 01:15:45</p>
                </div>
              </div>
            </div>
            {/* bottom end */}
          </div>
        </div>
        </sectiion>
        {/* section 1 end */}












        {/* section 2 */}
        <section>
          <div className=" bg-slate-300 h-[44.3rem] w-[95rem]  flex flex-row mt-[2rem]">
            {/* left side */}
          <div className="bg-slate-50 h-[44.3rem] w-[12rem] grid grid-row-9 grid-flow-row">
            <div className="flex flex-row">
            <img
          className="h-[3rem] w-[8rem]  ml-[0.9rem] mt-[0.2rem] rounded-[2rem]"
          src="Arogya sarthi (1) 2.png"
          alt="instagram"
        />
            </div>
            <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[1rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Overview</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Calender</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[10rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Patient List</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Messages</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Settings</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[6rem] ml-[1.5rem] mt-[15rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Help</p>
                </button>
            <div className=" bg-slate-900 h-[0.1rem] w-[12rem]"></div>
            <div className="flex flex-row">
            <img
          className="h-[4rem] w-[3rem]  ml-[1.5rem] mt-[0rem]"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="instagram"
        />
          <div className="">
          <p className="">Dr. Pooja</p>
          <p className="">Dentist</p>
          </div>
          
            </div>
          </div>
          {/* left side end */}
          {/* right side */}
          <div className=" bg-amber-100 h-[44rem] w-[83rem]">
             {/* top  */}
             <div className=" bg-amber-100 h-[3.8rem] w-[83rem] grid grid-col-4 grid-flow-col">
              <p className="pt-[1rem] ml-[2rem]">Appointment Calender</p>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[58rem] mt-[0.8rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUOeN30AM5GyUtbi-NjOdHxnIG0SFYEKjA&usqp=CAU"
          alt="instagram"
        />
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
            </div>
            {/* top end */}
            {/* middle */}
            <div className=" bg-slate-900 h-[0.2rem] w-[83rem]"></div>
            {/* middle end */}
            {/* bottom */}
            <div className=" bg-amber-100 h-[40rem] w-[83rem]">
            <div className=" bg-amber-100 h-[3rem] w-[83rem] mt-[2rem] flex flex-row">
            <button className="bg-slate-100 h-[2rem] w-[4rem] ml-[2rem] mt-[0.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
            <button className="bg-slate-100 h-[2rem] w-[4rem] ml-[2rem] mt-[0.5rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
            <div className="flex flex-row">
              <p className="ml-[38rem] mt-[0.7rem]">Todays</p>
            </div>
            </div>
            <div className=" bg-amber-100 h-[35rem] w-[83rem] mt-[1rem] grid grid-col-15 grid-flow-col">
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[4rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-1rem]">
              <p className="ml-[4.5rem]">3</p>
              <p className="ml-[3rem]">Monday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[20rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-2rem]">
            <p className="ml-[4.5rem]">4</p>
              <p className="ml-[3rem]">Tuesday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[20rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
                <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-2rem]">
            <p className="ml-[4.5rem]">5</p>
              <p className="ml-[3rem]">Wedneday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
                <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-2rem]">
            <p className="ml-[4.5rem]">6</p>
              <p className="ml-[3rem]">Thursday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
                <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-2rem]">
            <p className="ml-[4.5rem]">7</p>
              <p className="ml-[3.5rem]">Friday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-2rem]">
            <p className="ml-[4.5rem]">8</p>
              <p className="ml-[3rem]">Saturday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            <div className="bg-amber-100 h-[35rem] w-[10rem] ml-[-2rem]">
            <p className="ml-[4.5rem]">9</p>
              <p className="ml-[3.3rem]">Sunday</p>
              <button className="bg-slate-50 h-[3.5rem] w-[10rem] ml-[0rem] mt-[2rem] rounded-[0.2rem] text-[1.5rem] text-blue-400 hover:pointer hover:bg-green-400">
              <p className="ml-[-5.7rem] mt-[-0.5rem] text-[1.3rem]">11:30</p>
        <p className="ml-[-3.7rem] mt-[0rem] text-[0.8rem]">Bhojraj Padole</p>
                </button>
            </div>
            <div className=" bg-slate-900 h-[35rem] w-[0.1rem] ml-[-1rem]"></div>
            </div>
            </div>
            {/* bottom end */}
          </div>
          </div>
        </section>
        {/* section 2 end */}


















        {/* section 3 */}
        <section>
          <div className=" bg-slate-300 h-[44.3rem] w-[95rem]  flex flex-row mt-[2rem]">
            {/* left side */}
          <div className="bg-slate-50 h-[44.3rem] w-[12rem] grid grid-row-9 grid-flow-row">
            <div className="flex flex-row">
            <img
          className="h-[3rem] w-[8rem]  ml-[0.9rem] mt-[0.2rem] rounded-[2rem]"
          src="Arogya sarthi (1) 2.png"
          alt="instagram"
        />
            </div>
            <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[1rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Overview</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Calender</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[10rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Patient List</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Messages</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Settings</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[6rem] ml-[1.5rem] mt-[15rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Help</p>
                </button>
            <div className=" bg-slate-900 h-[0.1rem] w-[12rem]"></div>
            <div className="flex flex-row">
            <img
          className="h-[4rem] w-[3rem]  ml-[1.5rem] mt-[0rem]"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="instagram"
        />
          <div className="">
          <p className="">Dr. Pooja</p>
          <p className="">Dentist</p>
          </div>
          
            </div>
          </div>
          {/* left side end */}
          {/* right side */}
          <div className=" bg-amber-100 h-[44rem] w-[83rem]">
             {/* top  */}
             <div className=" bg-amber-100 h-[3.8rem] w-[83rem] grid grid-col-4 grid-flow-col">
              <p className="pt-[1rem] ml-[2rem]">Patient list</p>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[58rem] mt-[0.8rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUOeN30AM5GyUtbi-NjOdHxnIG0SFYEKjA&usqp=CAU"
          alt="instagram"
        />
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
            </div>
            {/* top end */}
            {/* middle */}
            <div className=" bg-slate-900 h-[0.2rem] w-[83rem]"></div>
            {/* middle end */}
            {/* bottom */}
            <div className=" bg-amber-100 h-[40rem] w-[83rem]">
              <div className=" bg-slate-50 h-[3.5rem] w-[70rem] ml-[6rem] mt-[2rem] rounded-[1rem] flex flex-row">
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[0.5rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
              <div className="">
                <p className="text-[0.8rem] ml-[0.5rem] mt-[0.5rem]">Bhojraj Padole</p>
                <p className="text-[0.8rem] ml-[0.5rem]">Nagpur</p>
              </div>
              <p className="mt-[1rem] ml-[4rem]">UID: 2585 0020 4453</p>
              <p className="mt-[1rem] ml-[4rem]">09:30 am : 10:00</p>
              <button className="bg-slate-100 h-[2rem] w-[7rem] ml-[10rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Accept</button>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-slate-400 hover:pointer hover:bg-green-400 text-[1.5rem]">Reshedule</button>
              <button className="bg-slate-100 h-[2rem] w-[6rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-red-800 hover:pointer hover:bg-green-400 text-[1.5rem]">Cancel</button>
              </div>
              <div className=" bg-slate-50 h-[3.5rem] w-[70rem] ml-[6rem] mt-[2rem] rounded-[1rem] flex flex-row">
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[0.5rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
              <div className="">
                <p className="text-[0.8rem] ml-[0.5rem] mt-[0.5rem]">Bhojraj Padole</p>
                <p className="text-[0.8rem] ml-[0.5rem]">Nagpur</p>
              </div>
              <p className="mt-[1rem] ml-[4rem]">UID: 2585 0020 4453</p>
              <p className="mt-[1rem] ml-[4rem]">09:30 am : 10:00</p>
              <button className="bg-slate-100 h-[2rem] w-[7rem] ml-[10rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Accept</button>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-slate-400 hover:pointer hover:bg-green-400 text-[1.5rem]">Reshedule</button>
              <button className="bg-slate-100 h-[2rem] w-[6rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-red-800 hover:pointer hover:bg-green-400 text-[1.5rem]">Cancel</button>
              </div>
              <div className=" bg-slate-50 h-[3.5rem] w-[70rem] ml-[6rem] mt-[2rem] rounded-[1rem] flex flex-row">
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[0.5rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
              <div className="">
                <p className="text-[0.8rem] ml-[0.5rem] mt-[0.5rem]">Bhojraj Padole</p>
                <p className="text-[0.8rem] ml-[0.5rem]">Nagpur</p>
              </div>
              <p className="mt-[1rem] ml-[4rem]">UID: 2585 0020 4453</p>
              <p className="mt-[1rem] ml-[4rem]">09:30 am : 10:00</p>
              <button className="bg-slate-100 h-[2rem] w-[7rem] ml-[10rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Accept</button>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-slate-400 hover:pointer hover:bg-green-400 text-[1.5rem]">Reshedule</button>
              <button className="bg-slate-100 h-[2rem] w-[6rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-red-800 hover:pointer hover:bg-green-400 text-[1.5rem]">Cancel</button>
              </div>
              <div className=" bg-slate-50 h-[3.5rem] w-[70rem] ml-[6rem] mt-[2rem] rounded-[1rem] flex flex-row">
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[0.5rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
              <div className="">
                <p className="text-[0.8rem] ml-[0.5rem] mt-[0.5rem]">Bhojraj Padole</p>
                <p className="text-[0.8rem] ml-[0.5rem]">Nagpur</p>
              </div>
              <p className="mt-[1rem] ml-[4rem]">UID: 2585 0020 4453</p>
              <p className="mt-[1rem] ml-[4rem]">09:30 am : 10:00</p>
              <button className="bg-slate-100 h-[2rem] w-[7rem] ml-[10rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Accept</button>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-slate-400 hover:pointer hover:bg-green-400 text-[1.5rem]">Reshedule</button>
              <button className="bg-slate-100 h-[2rem] w-[6rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-red-800 hover:pointer hover:bg-green-400 text-[1.5rem]">Cancel</button>
              </div>
              <div className=" bg-slate-50 h-[3.5rem] w-[70rem] ml-[6rem] mt-[2rem] rounded-[1rem] flex flex-row">
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[0.5rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
              <div className="">
                <p className="text-[0.8rem] ml-[0.5rem] mt-[0.5rem]">Bhojraj Padole</p>
                <p className="text-[0.8rem] ml-[0.5rem]">Nagpur</p>
              </div>
              <p className="mt-[1rem] ml-[4rem]">UID: 2585 0020 4453</p>
              <p className="mt-[1rem] ml-[4rem]">09:30 am : 10:00</p>
              <button className="bg-slate-100 h-[2rem] w-[7rem] ml-[10rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Accept</button>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-slate-400 hover:pointer hover:bg-green-400 text-[1.5rem]">Reshedule</button>
              <button className="bg-slate-100 h-[2rem] w-[6rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-red-800 hover:pointer hover:bg-green-400 text-[1.5rem]">Cancel</button>
              </div>
              <div className=" bg-slate-50 h-[3.5rem] w-[70rem] ml-[6rem] mt-[2rem] rounded-[1rem] flex flex-row">
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[0.5rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
              <div className="">
                <p className="text-[0.8rem] ml-[0.5rem] mt-[0.5rem]">Bhojraj Padole</p>
                <p className="text-[0.8rem] ml-[0.5rem]">Nagpur</p>
              </div>
              <p className="mt-[1rem] ml-[4rem]">UID: 2585 0020 4453</p>
              <p className="mt-[1rem] ml-[4rem]">09:30 am : 10:00</p>
              <button className="bg-slate-100 h-[2rem] w-[7rem] ml-[10rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Accept</button>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-slate-400 hover:pointer hover:bg-green-400 text-[1.5rem]">Reshedule</button>
              <button className="bg-slate-100 h-[2rem] w-[6rem] ml-[1rem] mt-[0.8rem] rounded-[0.7rem] text-base border border-white text-red-800 hover:pointer hover:bg-green-400 text-[1.5rem]">Cancel</button>
              </div>
            </div>
            {/* bottom end */}
          </div>
          </div>
        </section>
        {/* section 3 end */}
        {/* section 4 */}
        <section>
          <div className=" bg-slate-300 h-[44.3rem] w-[95rem]  flex flex-row mt-[2rem]">
            {/* left side */}
          <div className="bg-slate-50 h-[44.3rem] w-[12rem] grid grid-row-9 grid-flow-row">
            <div className="flex flex-row">
            <img
          className="h-[3rem] w-[8rem]  ml-[0.9rem] mt-[0.2rem] rounded-[2rem]"
          src="Arogya sarthi (1) 2.png"
          alt="instagram"
        />
            </div>
            <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[1rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Overview</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Calender</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[10rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Patient List</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Messages</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[9rem] ml-[1.5rem] mt-[0.5rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Settings</p>
                </button>
                <button className="bg-slate-50 h-[2.2rem] w-[6rem] ml-[1.5rem] mt-[15rem] rounded-[6rem] text-[1.5rem] flex flex-row hover:pointer hover:bg-green-400">
                <img
          className="h-[1.5rem] w-[1.5rem]  ml-[0.4rem] mt-[0.4rem] rounded-[2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <p className="ml-[0.7rem] mt-[rem] text-[1.3rem]">Help</p>
                </button>
            <div className=" bg-slate-900 h-[0.1rem] w-[12rem]"></div>
            <div className="flex flex-row">
            <img
          className="h-[4rem] w-[3rem]  ml-[1.5rem] mt-[0rem]"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="instagram"
        />
          <div className="">
          <p className="">Dr. Pooja</p>
          <p className="">Dentist</p>
          </div>
          
            </div>
          </div>
          {/* left side end */}
          {/* right side */}
          <div className=" bg-amber-100 h-[44rem] w-[83rem]">
             {/* top  */}
             <div className=" bg-amber-100 h-[3.8rem] w-[83rem] grid grid-col-4 grid-flow-col">
              <p className="pt-[1rem] ml-[2rem]">Patient list</p>
              <button className="bg-slate-100 h-[2rem] w-[8rem] ml-[58rem] mt-[0.8rem] rounded-[6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">More</button>
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUOeN30AM5GyUtbi-NjOdHxnIG0SFYEKjA&usqp=CAU"
          alt="instagram"
        />
              <img
          className="h-[1.7rem] w-[1.7rem]  ml-[rem] mt-[1rem] rounded-[2rem]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-bell-ring-voice-alarm-clock-37906.png?f=webp"
          alt="instagram"
        />
            </div>
            {/* top end */}
            {/* middle */}
            <div className=" bg-slate-900 h-[0.2rem] w-[83rem]"></div>
            {/* middle end */}
            {/* bottom */}
            <div className=" bg-amber-100 h-[40rem] w-[83rem]">
            <div className=" bg-amber-100 h-[3rem] w-[83rem] mt-[2rem] flex flex-row">
            <button className="bg-slate-100 h-[3rem] w-[5rem] ml-[2rem] mt-[0.3rem] rounded-[0.6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Month</button>
            <button className="bg-slate-100 h-[3rem] w-[5rem] ml-[2rem] mt-[0.3rem] rounded-[0.6rem] text-base border border-white text-black hover:pointer hover:bg-green-400 text-[1.5rem]">Week</button>
            <div className="flex flex-row">
              <p className="ml-[38rem] mt-[0.7rem]">October 2023</p>
            </div>
            </div>
             <div className="grid grid-col-7 grid-flow-col mt-[1rem]">
              <p className="ml-[3rem]">Monday</p>
              <p className="ml-[-5em]">Tuesday</p>
              <p className="ml-[-6rem]">Wednesday</p>
              <p className="ml-[-7rem]">Thursday</p>
              <p className="ml-[-7rem]">Friday</p>
              <p className="ml-[-8rem]">Saturday</p>
              <p className="ml-[-9rem]">Sunday</p>
             </div>
              <div className="flex flex-row ml-[5rem]">
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                  <p className="ml-[8.5rem] mt-[0.5rem]">1</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">2</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">3</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">4</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">5</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">6</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">7</p>
                </div>
              </div>
              <div className="flex flex-row ml-[5rem] mt-[-2rem]">
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">8</p>
                </div>
                <div className=" bg-slate-200 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">9</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">10</p>
                <div className=" bg-slate-50 h-[3rem] w-[6rem] ml-[3rem] rounded-[0.3rem]">
                  <p className="text-[0.7rem] ml-[0.2rem] text-blue-500">14 Appointments</p>
                  <div className="flex flex-row">
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.9rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">5 Accepted</button>
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.1rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">9 Pending</button>
                  </div>
                </div>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">11</p>
                <div className=" bg-slate-50 h-[3rem] w-[6rem] ml-[3rem] rounded-[0.3rem]">
                  <p className="text-[0.7rem] ml-[0.2rem] text-blue-500">14 Appointments</p>
                  <div className="flex flex-row">
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.9rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">5 Accepted</button>
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.1rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">9 Pending</button>
                  </div>
                </div>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">12</p>
                <div className=" bg-slate-50 h-[3rem] w-[6rem] ml-[3rem] rounded-[0.3rem]">
                  <p className="text-[0.7rem] ml-[0.2rem] text-blue-500">14 Appointments</p>
                  <div className="flex flex-row">
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.9rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">5 Accepted</button>
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.1rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">9 Pending</button>
                  </div>
                </div>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">13</p>
                <div className=" bg-slate-50 h-[3rem] w-[6rem] ml-[3rem] rounded-[0.3rem]">
                  <p className="text-[0.7rem] ml-[0.2rem] text-blue-500">14 Appointments</p>
                  <div className="flex flex-row">
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.9rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">5 Accepted</button>
                  <button className="bg-slate-100 h-[1.5rem] w-[3.5rem] ml-[-0.1rem] mt-[0.1rem] rounded-[0.3rem] text-base border border-white text-yellow-300 hover:pointer hover:bg-green-400 text-[10px]">9 Pending</button>
                  </div>
                </div>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">14</p>
                </div>
              </div>
              <div className="flex flex-row ml-[5rem] mt-[-2rem]">
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">15</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">16</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">17</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">18</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">19</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">20</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">21</p>
                </div>
              </div>
              <div className="flex flex-row ml-[5rem] mt-[-2rem]">
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">22</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">23</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">24</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">25</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">26</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">27</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">28</p>
                </div>
              </div>
              <div className="flex flex-row ml-[5rem] mt-[-2rem]">
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">29</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">30</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">31</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">1</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">2</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">3</p>
                </div>
                <div className=" bg-slate-50 mt-[2rem] h-[6rem] w-[10rem] border-slate-300 border-[0.05rem]">
                <p className="ml-[8.5rem] mt-[0.5rem]">4</p>
                </div>
              </div>
              
            </div>
            {/* bottom end */}
          </div>
          </div>
        </section>
        {/* section 4 end */}
      </body>
    </>
  )
}

export default App