---
title: 3D Laser Scanner
publishDate: 2018-11-01 00:00:00
img: /assets/scanner-hedgehog.jpg
img_alt: Physical object scanned with the 3D laser scanner
description: |
  A physical 3D scanner built with a rotating platform, a line laser and a camera. C++ + OpenCV processes each frame to extract the laser deformation and reconstruct a full 3D point cloud.
tags:
  - C++
  - OpenCV
  - Computer Vision
  - 3D Reconstruction
url: https://github.com/lehi10/Computer_Graphics_Repository
lastCommit: May 2025
images:
  - src: /assets/scanner-hedgehog.jpg
    alt: Hedgehog object placed on the rotating platform
  - src: /assets/scanner-pointcloud.png
    alt: 3D point cloud reconstruction of the hedgehog
---

## How it works

A vertical laser line is projected onto an object placed on a motorized rotating platform. As the platform turns, the laser deforms according to the object's surface geometry. A camera captures each frame of that deformation.

The captured frames are processed in **C++** using **OpenCV** to:

1. Isolate the laser line from each frame
2. Extract the pixel coordinates of the line profile
3. Convert 2D coordinates to 3D points using triangulation
4. Accumulate the full point cloud across all rotation angles

The resulting point cloud is visualized using **tkViewer**.

## Stack

- **C++** — core processing pipeline
- **OpenCV** — frame capture, laser line extraction, image processing
- **tkViewer** — 3D point cloud visualization
