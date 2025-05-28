// import { meshBounds, useGLTF } from '@react-three/drei'
// import React from 'react'
// import skyScene from '../assets/3d/sky.glb'

// const Sky = () => {
//     const sky=useGLTF(skyScene);
//   return (
//     <mesh>
//         <primitive object={sky.scene} />

//     </mesh>
//   )
// }

// export default Sky
import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
  const sky = useGLTF(skyScene)

  return (
    <primitive 
      object={sky.scene} 
      scale={[50000, 50000, 50000]} 
      rotation={[-Math.PI / 2, 0, 0]} 
    />
  )
}

export default Sky
