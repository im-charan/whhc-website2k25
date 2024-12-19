import React, {lazy} from "react";
import {Navigate} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const BrainWavesHubPage = lazy(() => import('../pages/BrainWavesHubPage'));
const PhotoGallery = lazy(() => import('../pages/PhotoGallery'));
const Technozarre = lazy(() => import('../pages/Technozarre'));
const TheTeam = lazy(() => import('../pages/TheTeam'));

const Router = [
  {
    path : '/' , element: <Navigate to = '/home' />
  },
  {
    path : '/home' , element: <Home />
  },
  {
    path : '/brainwaveshub' , element: <BrainWavesHubPage />
  },
  {
    path : '/photogallery' , element: <PhotoGallery />
  },
  {
    path : '/technozarre' , element: <Technozarre />
  },
  {
    path : '/team' , element : <TheTeam />
  }
]

export default Router;