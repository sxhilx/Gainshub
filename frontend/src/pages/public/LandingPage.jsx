import React from 'react'
import { Button, FeatureCard} from '../../components'
import { DumbbellIcon, MoveRightIcon, TrophyIcon } from 'lucide-react'
import { DashboardImage } from '../../assets'

const LandingPage = () => {
  return (
    <main className=''>

      {/*Glow Effect*/}
      <div class="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        
      </div>

        <section className='px-2'>
            <div className='max-w-6xl mx-auto flex flex-col justify-center items-center mt-25 text-center'>    

                <div className='text-4xl md:text-5xl font-bold text-white'>
                  <span>Log Your 
                    <span className='text-transparent bg-gradient-to-br from-[#27c2ff] to-[#0d76de] bg-clip-text'> Workouts</span>.
                  </span><br />
                  <span className='text-transparent bg-gradient-to-br from-[#27c2ff] to-[#0d76de] bg-clip-text '>Dominate </span>
                    <span>
                      Your Goals.
                    </span>
                </div>

                <div className='mt-2'>
                  <span className='text-slate-400 tracking-wide'>Gainshub helps you log workouts and track personal records in a beautiful way.</span>
                </div>

                <div className='mt-5'>
                  <Button
                  to={"/signup"}
                  className='group px-2 lg:px-4 font-medium bg-gradient-to-tr from-[#27c2ff] to-[#0d76de] flex gap-2'
                  >
                    <span className='transition-transform duration-200 group-hover:-translate-x-1.5'>Start Logging</span> <MoveRightIcon className='w-4 transition-transform duration-200 group-hover:translate-x-1.5'/>
                  </Button>
                </div>                

                <div className='backdrop-blur-3xl bg-white/10 rounded-lg w-full md:w-[75%] mt-10'>
                    <img src={DashboardImage} alt="Image" className='p-5 rounded-lg'/>
                </div>

            </div>
        </section>

      <section className='mt-40 mb-20'>
        <div className='text-center'>
          <h1 className='text-white text-3xl md:text-4xl font-bold '>Everything You Need to Progress</h1>
          <p className='text-slate-400 text-md md:text-lg tracking-wide mt-2'>
            Powerful features designed to help you reach your fitness goals faster.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-12 space-y-12 lg:px-32 lg:py-16 lg:space-x-7'>

          <FeatureCard title={'Workout Tracking'} Icon={DumbbellIcon} description={'Log and track your workouts with detailed exercise breakdowns and progress monitoring.'}/>

          <FeatureCard title={'Personal Records'} Icon={TrophyIcon} description={'Keep track of your PRs and celebrate your achievements as you reach new milestones.'}/>
        </div>
      </section>

    </main>
  )
}

export default LandingPage