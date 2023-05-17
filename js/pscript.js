

        var scene, camera, renderer, clock, btn , mode;
        var mixers = [];
        var actions = [];

        mode = 'open';

        init();

        

        function init() 
        {  
            //SCENE & CAMERA
            scene= new THREE.Scene();
            scene.background = new THREE.Color(0x00aaff);
            camera= new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
            camera.position.set(0,3,10);
            clock = new THREE.Clock();
            //LIGHT
            const ambient= new THREE.HemisphereLight(0xffffbb,0x080808);
            const light= new THREE.DirectionalLight(0xffffff,1);
            scene.add(ambient);
            scene.add(light);
            //RENDERER
            renderer= new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.setClearColor(new THREE.Color(0x0000bb));
            document.body.appendChild(renderer.domElement);
            //CONTROLS
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.target.set(0,4,0);
            controls.update();
            //GRID
            const gridsize = 100;
            const gridzone = 100;
            const grid = new THREE.GridHelper(gridsize,gridzone);
            scene.add(grid);  
            btn = document.getElementById('btn');
            //LOADER
            const assetPath='';
            const loader = new THREE.GLTFLoader();
            loader.setPath(assetPath);
            document.addEventListener('keydown', canlandir, false);
            loader.load('patrickanm.glb', function(object) {
                const patrick = object.scene.children[0];
                let mixerpatrick= new THREE.AnimatonMixer(patrick);
                mixers.push(mixerpatrick);
                let actionpatrick= mixerpatrick.clipAction(object.animations[0]);
                actionpatrick.loop = THREE.LoopOnce;
                actionpatrick.clampWhenFinished = true;
                actions.push(actionpatrick);
                scene.add(object.scene);
            });

            window.addEventListener('resize',resize,false);
            animate();

        }
        function animate() {
            requestAnimationFrame(animate);
            const dt = clock.getDelta();
            mixers.forEach(mixer => mixer.update(dt));
            renderer.render(scene, camera);
            
        }       
        function resize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        function canlandir(event) {
            var keyCode = event.which;
            
            if(keyCode == 32 && actions !== undefined) {

                if(mode == 'open') {

                    actions.forEach( action => {
                        action.reset();
                        action.timeScale = 1;
                        action.play();
                    });

                    mode = 'close';
                    btn.innerHTML = 'GERİ';

                } else {

                    actions.forEach( action => {
                        action.reset();
                        action.time = action.getClip().duration;
                        action.timeScale = -1;
                        action.play();
                    });

                    mode = 'open';
                    btn.innerHTML = 'İLERİ';
                }

            } 
        
        }

        
