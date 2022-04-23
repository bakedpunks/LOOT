import React, { PureComponent } from "react";

import Web3 from 'web3';


//import { Entity, Scene } from "aframe-react";

import 'aframe';
import 'aframe-event-set-component'; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import 'networked-aframe';

require('aframe-mirror-component');

const items = []
const itemsonchain = []
const itemschar = []
const itemsonchainmma = []

for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 2000);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot/' + s + '.png';
        items.push(<div class="card col-md-4" ><img class="img-fluid"  src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot' + s + '.png';
        itemsonchain.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = Math.floor(Math.random() * 250);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot-characters/' + s + '.png';
        itemschar.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/mmaloot' + s + '.png';
        itemsonchainmma.push(<div class="card col-md-4" ><a href="https://app.nftrade.com/assets/bsc/0x48bf76b0dcc1326ae962b9301c40ee1ea399e186" ><img class="img-fluid" src={newImageUrl} /></a><div class="card-body"> <h5 class="card-title">NO {index} </h5></div></div>)
}
function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
}


const Metagascar = ({ connectToMetamask }) => {
  return (
    <script>
/**
 * @author Slayvin / http://slayvin.net
 */

THREE.ShaderLib[ 'mirror' ] = {

	uniforms: {
		"mirrorColor": { value: new THREE.Color( 0x7F7F7F ) },
		"mirrorSampler": { value: null },
		"textureMatrix" : { value: new THREE.Matrix4() }
	},

	vertexShader: [

		"uniform mat4 textureMatrix;",

		"varying vec4 mirrorCoord;",

		"void main() {",

			"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
			"mirrorCoord = textureMatrix * worldPosition;",

			"gl_Position = projectionMatrix * mvPosition;",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform vec3 mirrorColor;",
		"uniform sampler2D mirrorSampler;",

		"varying vec4 mirrorCoord;",

		"float blendOverlay(float base, float blend) {",
			"return( base < 0.5 ? ( 2.0 * base * blend ) : (1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );",
		"}",

		"void main() {",

			"vec4 color = texture2DProj(mirrorSampler, mirrorCoord);",
			"color = vec4(blendOverlay(mirrorColor.r, color.r), blendOverlay(mirrorColor.g, color.g), blendOverlay(mirrorColor.b, color.b), 1.0);",

			"gl_FragColor = color;",

		"}"

	].join( "\n" )

};

THREE.Mirror = function ( renderer, camera, options ) {

	THREE.Object3D.call( this );

	this.name = 'mirror_' + this.id;

	options = options || {};

	this.matrixNeedsUpdate = true;

	var width = options.textureWidth !== undefined ? options.textureWidth : 512;
	var height = options.textureHeight !== undefined ? options.textureHeight : 512;

	this.clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;

	var mirrorColor = options.color !== undefined ? new THREE.Color( options.color ) : new THREE.Color( 0x7F7F7F );

	this.renderer = renderer;
	this.mirrorPlane = new THREE.Plane();
	this.normal = new THREE.Vector3( 0, 0, 1 );
	this.mirrorWorldPosition = new THREE.Vector3();
	this.cameraWorldPosition = new THREE.Vector3();
	this.rotationMatrix = new THREE.Matrix4();
	this.lookAtPosition = new THREE.Vector3( 0, 0, - 1 );
	this.clipPlane = new THREE.Vector4();

	// For debug only, show the normal and plane of the mirror
	var debugMode = options.debugMode !== undefined ? options.debugMode : false;

	if ( debugMode ) {

		var arrow = new THREE.ArrowHelper( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 0, 0, 0 ), 10, 0xffff80 );
		var planeGeometry = new THREE.Geometry();
		planeGeometry.vertices.push( new THREE.Vector3( - 10, - 10, 0 ) );
		planeGeometry.vertices.push( new THREE.Vector3( 10, - 10, 0 ) );
		planeGeometry.vertices.push( new THREE.Vector3( 10, 10, 0 ) );
		planeGeometry.vertices.push( new THREE.Vector3( - 10, 10, 0 ) );
		planeGeometry.vertices.push( planeGeometry.vertices[ 0 ] );
		var plane = new THREE.Line( planeGeometry, new THREE.LineBasicMaterial( { color: 0xffff80 } ) );

		this.add( arrow );
		this.add( plane );

	}

	if ( camera instanceof THREE.PerspectiveCamera ) {

		this.camera = camera;

	} else {

		this.camera = new THREE.PerspectiveCamera();
		console.log( this.name + ': camera is not a Perspective Camera!' );

	}

	this.textureMatrix = new THREE.Matrix4();

	this.mirrorCamera = this.camera.clone();
	this.mirrorCamera.matrixAutoUpdate = true;

	var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

	this.renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );
	this.renderTarget2 = new THREE.WebGLRenderTarget( width, height, parameters );

	var mirrorShader = THREE.ShaderLib[ "mirror" ];
	var mirrorUniforms = THREE.UniformsUtils.clone( mirrorShader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		fragmentShader: mirrorShader.fragmentShader,
		vertexShader: mirrorShader.vertexShader,
		uniforms: mirrorUniforms

	} );

	this.material.uniforms.mirrorSampler.value = this.renderTarget.texture;
	this.material.uniforms.mirrorColor.value = mirrorColor;
	this.material.uniforms.textureMatrix.value = this.textureMatrix;

	if ( ! THREE.Math.isPowerOfTwo( width ) || ! THREE.Math.isPowerOfTwo( height ) ) {

		this.renderTarget.texture.generateMipmaps = false;
		this.renderTarget2.texture.generateMipmaps = false;

	}

	this.updateTextureMatrix();
	this.render();

};

THREE.Mirror.prototype = Object.create( THREE.Object3D.prototype );
THREE.Mirror.prototype.constructor = THREE.Mirror;

THREE.Mirror.prototype.renderWithMirror = function ( otherMirror ) {

	// update the mirror matrix to mirror the current view
	this.updateTextureMatrix();
	this.matrixNeedsUpdate = false;

	// set the camera of the other mirror so the mirrored view is the reference view
	var tempCamera = otherMirror.camera;
	otherMirror.camera = this.mirrorCamera;

	// render the other mirror in temp texture
	otherMirror.renderTemp();
	otherMirror.material.uniforms.mirrorSampler.value = otherMirror.renderTarget2.texture;

	// render the current mirror
	this.render();
	this.matrixNeedsUpdate = true;

	// restore material and camera of other mirror
	otherMirror.material.uniforms.mirrorSampler.value = otherMirror.renderTarget.texture;
	otherMirror.camera = tempCamera;

	// restore texture matrix of other mirror
	otherMirror.updateTextureMatrix();

};

THREE.Mirror.prototype.updateTextureMatrix = function () {

	this.updateMatrixWorld();
	this.camera.updateMatrixWorld();

	this.mirrorWorldPosition.setFromMatrixPosition( this.matrixWorld );
	this.cameraWorldPosition.setFromMatrixPosition( this.camera.matrixWorld );

	this.rotationMatrix.extractRotation( this.matrixWorld );

	this.normal.set( 0, 0, 1 );
	this.normal.applyMatrix4( this.rotationMatrix );

	var view = this.mirrorWorldPosition.clone().sub( this.cameraWorldPosition );
	view.reflect( this.normal ).negate();
	view.add( this.mirrorWorldPosition );

	this.rotationMatrix.extractRotation( this.camera.matrixWorld );

	this.lookAtPosition.set( 0, 0, - 1 );
	this.lookAtPosition.applyMatrix4( this.rotationMatrix );
	this.lookAtPosition.add( this.cameraWorldPosition );

	var target = this.mirrorWorldPosition.clone().sub( this.lookAtPosition );
	target.reflect( this.normal ).negate();
	target.add( this.mirrorWorldPosition );

	this.up.set( 0, - 1, 0 );
	this.up.applyMatrix4( this.rotationMatrix );
	this.up.reflect( this.normal ).negate();

	this.mirrorCamera.position.copy( view );
	this.mirrorCamera.up = this.up;
	this.mirrorCamera.lookAt( target );

	this.mirrorCamera.updateProjectionMatrix();
	this.mirrorCamera.updateMatrixWorld();
	this.mirrorCamera.matrixWorldInverse.getInverse( this.mirrorCamera.matrixWorld );

	// Update the texture matrix
	this.textureMatrix.set( 0.5, 0.0, 0.0, 0.5,
							0.0, 0.5, 0.0, 0.5,
							0.0, 0.0, 0.5, 0.5,
							0.0, 0.0, 0.0, 1.0 );
	this.textureMatrix.multiply( this.mirrorCamera.projectionMatrix );
	this.textureMatrix.multiply( this.mirrorCamera.matrixWorldInverse );

	// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
	// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
	this.mirrorPlane.setFromNormalAndCoplanarPoint( this.normal, this.mirrorWorldPosition );
	this.mirrorPlane.applyMatrix4( this.mirrorCamera.matrixWorldInverse );

	this.clipPlane.set( this.mirrorPlane.normal.x, this.mirrorPlane.normal.y, this.mirrorPlane.normal.z, this.mirrorPlane.constant );

	var q = new THREE.Vector4();
	var projectionMatrix = this.mirrorCamera.projectionMatrix;

	q.x = ( Math.sign( this.clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
	q.y = ( Math.sign( this.clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
	q.z = - 1.0;
	q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

	// Calculate the scaled plane vector
	var c = new THREE.Vector4();
	c = this.clipPlane.multiplyScalar( 2.0 / this.clipPlane.dot( q ) );

	// Replacing the third row of the projection matrix
	projectionMatrix.elements[ 2 ] = c.x;
	projectionMatrix.elements[ 6 ] = c.y;
	projectionMatrix.elements[ 10 ] = c.z + 1.0 - this.clipBias;
	projectionMatrix.elements[ 14 ] = c.w;

};

THREE.Mirror.prototype.render = function () {

	if ( this.matrixNeedsUpdate ) this.updateTextureMatrix();

	this.matrixNeedsUpdate = true;

	// Render the mirrored view of the current scene into the target texture
	var scene = this;

	while ( scene.parent !== null ) {

		scene = scene.parent;

	}

	if ( scene !== undefined && scene instanceof THREE.Scene ) {

		// We can't render ourself to ourself
		var visible = this.material.visible;
		this.material.visible = false;

		this.renderer.render( scene, this.mirrorCamera, this.renderTarget, true );

		this.material.visible = visible;

	}

};

THREE.Mirror.prototype.renderTemp = function () {

	if ( this.matrixNeedsUpdate ) this.updateTextureMatrix();

	this.matrixNeedsUpdate = true;

	// Render the mirrored view of the current scene into the target texture
	var scene = this;

	while ( scene.parent !== null ) {

		scene = scene.parent;

	}

	if ( scene !== undefined && scene instanceof THREE.Scene ) {

		this.renderer.render( scene, this.mirrorCamera, this.renderTarget2, true );

	}

};



AFRAME.registerComponent('mirror', {
schema:{
    renderothermirror:{default:true},
},
init: function () {
    var scene = this.el.sceneEl;
    scene.addEventListener('render-target-loaded',this.OnRenderLoaded.bind(this));
},
OnRenderLoaded: function()
{
    var mirrorObj = this.el.getOrCreateObject3D('mesh',THREE.Mesh);
    var cameraEl = document.querySelector('a-entity[camera]')
    if(!cameraEl)
    {
        cameraEl = document.querySelector('a-camera');
    }
    var camera = cameraEl.components.camera.camera;
    var scene = this.el.sceneEl;
    this.renderer = scene.renderer;
    this.mirror = new THREE.Mirror( this.renderer, camera, { clipBias: 0.003, textureWidth: window.innerWidth, textureHeight: window.innerHeight, color: 0x777777 } );
    mirrorObj.material =this.mirror.material;
    mirrorObj.add(this.mirror);
},
tick: function () {
    if(!this.data.renderothermirror)
        {
            this.mirror.render();
        }
    else
        {
            var mirrors = [];
            var mirrorEls = document.querySelectorAll("a-entity[mirror]");
            for(var i=0;i<mirrorEls.length;i++)
            {
                if(mirrorEls[i]!=this.el)
                {
                    mirrors.push(mirrorEls[i].components.mirror.mirror);
                }
            }
            if(mirrors.length === 0)
            {
                this.mirror.render();
            }
            for(var i = 0; i<mirrors.length;i++)
            {
                this.mirror.renderWithMirror(mirrors[i]);
            }
        }
}
});
    </script>
    <a-scene >
        <a-assets>
          <img id="wall" src="https://view.metagascar.com/images/brick.wall.png" />
          <img id="street" src="https://view.metagascar.com/images/line.street.png" />
          <a-asset-item id="crate-obj" src="https://view.metagascar.com/images/obj/modernvilla.obj"></a-asset-item>
          <a-asset-item id="crate-mtl" src="https://view.metagascar.com/images/obj/modernvilla.mtl"></a-asset-item>
          <template id="my-template">
            <a-entity>
              <a-sphere color="#f00"></a-sphere>
            </a-entity>
          </template>
        </a-assets>

       <a-entity environment="preset: tron"></a-entity>

       <a-image src="#street" width="3" height="3" position="24 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="21 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="18 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="15 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="12 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="9 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="6 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="3 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="0 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-3 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-6 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-9 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-12 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-15 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-18 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-21 0.02 -3" rotation="90 0 0" ></a-image>



       <a-image src="#wall" width="3" height="3" position="25 0 3" ></a-image>
       <a-image src="#wall" width="3" height="3" position="25 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="26.5 0 1.5" rotation="0 90 0" ></a-image>

       <a-image src="#wall" width="3" height="3" position="20 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="15 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="10 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="5 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="0 0 0" ></a-image>

       <a-image src="#wall" width="3" height="3" position="-5 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="-10 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="-15 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="-20 0 0" ></a-image>


       <a-entity obj-model="obj:#crate-obj"
                 material="color: green" position="0 0 -4.5" scale="0.02 0.02 0.04" rotation="0 -82 0" >
       </a-entity>
       <a-entity obj-model="obj:#crate-obj"
                 material="color: blue" position="15 0 -4.5" scale="0.02 0.02 0.04" rotation="0 -82 0" >
       </a-entity>

       <a-sphere mirror="resolution: 64; distance: 1000; interval: 200; repeat: true" segments-radius="24" segments-height="24" radius="1.5" position="0 2.5 4" ></a-sphere>

       <a-entity id="mirror"
                 scale="1.0 1.0 1.0"
                 rotation="0 0 0"
                 position="0.0 1.5 -0.75"
                 geometry="primitive:plane; width:1.6; height:2.0"
                 mirror >
       </a-entity>

        <a-entity position="0 0 3.8" networked="template:#my-template;attachTemplateToLocal:false;" >
            <a-camera >
              <a-cursor />
            </a-camera>
        </a-entity>
    </a-scene>

  );
};

export default Metagascar;
