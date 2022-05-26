import axios from './axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FlightCard from './components/FlightCard'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'

function App() {

  const [spacex, setSpacex] = useState([]);
  const [isLoading, setLoading] = useState(true)

  let params = useParams();

  useEffect(() => {
    async function fetchData() {

      //console.log(params);

      let url = '';

      if ('y' in params) {
        url = 'launches?limit=20&launch_year=' + params.y;
      } else

        if ('t' in params) {
          url = 'launches?limit=20&launch_success=' + params.t;
        } else

          if ('l' in params) {
            url = 'launches?limit=20&land_success=' + params.l;
          } 
          
          else {
            url = 'launches?limit=20';
          }

      const request = await axios.get(url);
      setSpacex(request.data);
      setLoading(false) //stop loading when data is fetched
    }
    fetchData()
  }, [params]);


  return (
    <React.Fragment>
      <main className="p-10">
        <Header />
        <div className="w-full lg:flex">
          <Sidebar />

          <div className="lg:w-5/6">

            { isLoading &&  
              <Loader/>
            }

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {spacex.length > 0 && 
                spacex.map((value, index) => {
                  return (
                    <FlightCard
                      key={index}
                      MissionName={value.mission_name}
                      MissionIds={value.mission_id}
                      LaunchYear={value.launch_year}
                      LaunchSucess={value.launch_success}
                      Image={value.links.mission_patch}
                    />
                  )
                })
              }
              </div>

              {(spacex.length == 0 && !isLoading) && 
               <p className="text-center font-bold">No Data Found</p>
              }
            <Footer />

          </div>
        </div>

      </main>
    </React.Fragment>
  )
}

export default App