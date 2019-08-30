// adapted from https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_text.html
let sceneContainer;
let targetRotation = 0;
let targetRotationOnMouseDown = 0;
let mouseX = 0;
let mouseXOnMouseDown = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function onDocumentMouseDown( event ) {
  event.preventDefault();
  sceneContainer.addEventListener( 'mousemove', onDocumentMouseMove, false );
  sceneContainer.addEventListener( 'mouseup', onDocumentMouseUp, false );
  sceneContainer.addEventListener( 'mouseout', onDocumentMouseOut, false );
  mouseXOnMouseDown = event.clientX - windowHalfX;
  targetRotationOnMouseDown = targetRotation;
}
function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.008;
}
function onDocumentMouseUp( event ) {
  sceneContainer.removeEventListener( 'mousemove', onDocumentMouseMove, false );
  sceneContainer.removeEventListener( 'mouseup', onDocumentMouseUp, false );
  sceneContainer.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}
function onDocumentMouseOut( event ) {
  sceneContainer.removeEventListener( 'mousemove', onDocumentMouseMove, false );
  sceneContainer.removeEventListener( 'mouseup', onDocumentMouseUp, false );
  sceneContainer.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}
function onDocumentTouchStart( event ) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
    targetRotationOnMouseDown = targetRotation;
  }
}
function onDocumentTouchMove( event ) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.01;
  }
}

export function initializeControls(sceneDiv) {
  sceneContainer = sceneDiv;
  sceneContainer.addEventListener( 'mousedown', onDocumentMouseDown, false );
  sceneContainer.addEventListener( 'touchstart', onDocumentTouchStart, false );
  sceneContainer.addEventListener( 'touchmove', onDocumentTouchMove, false );
}

export function destroyControls() {
  sceneContainer.removeEventListener( 'mousedown', onDocumentMouseDown );
  sceneContainer.removeEventListener( 'touchstart', onDocumentTouchStart );
  sceneContainer.removeEventListener( 'touchmove', onDocumentTouchMove );
}

export function rotateObject(object) {
  object.rotation.y += ( targetRotation - object.rotation.y ) * 0.05;
}

export function updateControlsOnResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
}