import React, { useEffect, useState } from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

import VideosOrginizer from '../partials/VideosOrginizer';

import { getPlaylists } from '../utils/server/serverService';

function Videos() {
    let playlistsArr;
    const [playlists, setPlaylists] = useState();
    useEffect(()=>{
        const getPlaylistsMap = async () => {
            try{
              playlistsArr = await getPlaylists();
              setPlaylists(playlistsArr);
            } catch(error){
              alert("failed to get the categories from server")
            }
          };
          getPlaylistsMap();        
    }, [])





  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="h1 mb-4" data-aos="fade-up">
                            Videos, Enjoy!
                            </h1>
                        </div>
                </div>
            </div>
        {playlists?.map((playlist) => 
                        [<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                        <div className="relative pt-32 pb-10 md:pt-20 md:pb-0">
                                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h1 className="h1 mb-4" data-aos="fade-up">
                                    {playlist.name}
                                    </h1>
                                </div>
                        </div>
                    </div>, 
            playlist?.videos?.map((vid)=>
                <VideosOrginizer vid={vid} />
            )]
        )}

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Videos;