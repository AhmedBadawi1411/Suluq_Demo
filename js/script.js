Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ODlkMjE4NC05Y2FjLTQyZDQtYTA0My1lOWYwZDI4MWE4Y2YiLCJpZCI6MjI4ODkyLCJpYXQiOjE3MjE1ODM2NzV9.9rvdQOrodptBBzxr9f8GDbUNQ99PWGM6RaLg1gYJjUQ';

const viewer = new Cesium.Viewer(
    "cesiumContainer",
   {
        terrain: Cesium.Terrain.fromWorldTerrain({
            shouldAnimate:true,
            requestWaterMask:true,
            bottomContainer :false
        }),
   }
);

const scene = viewer.scene;
scene.globe.depthTestAgainstTerrain = true;
scene.globe.enableLighting = true;
scene.globe.softshadows =true;
scene.skyAtmosphere.show =true;

const initPosition = new Cesium.Cartesian3.fromDegrees(
    20.2421620291,
    31.6460422854,
    600
);

const initOrientation = new Cesium.HeadingPitchRoll.fromDegrees(
    21.20,
    -12.00,
    0.0,
)

function studyArea() {
    viewer.camera.flyTo(
        {
            destination:initPosition,
            duration:3,
            complete: function () {
                changePitch();
            }
        }
    ); //* End of fly to
} //* End of studyArea

function changePitch() {
    viewer.camera.flyTo(
        {
            destination:initPosition,
            orientation:initOrientation,
            duration:3,
            complete: function () {
                
            }
        }
    ); //* End of fly to
} //* End of changePitch

setTimeout(studyArea, 5000);
