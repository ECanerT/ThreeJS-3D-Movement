function bush() {

    const bush = new THREE.Group();

	const geometry = new THREE.SphereGeometry( 3, 13, 7,0,Math.PI*2,0,Math.PI/2  );
	const material = new THREE.MeshPhongMaterial( { color: 0x00aa00 } );
	const bushmesh1 = new THREE.Mesh( geometry, material );
	bushmesh1.position.set(2,0,0);
	bush.add( bushmesh1 );
    const bushmesh2 = new THREE.Mesh( geometry, material );
	bushmesh2.position.set(-2,0,0);
	bush.add( bushmesh2 );
    const bushmesh3 = new THREE.Mesh( geometry, material );
	bushmesh3.position.set(0,2,0);
	bush.add( bushmesh3 );

    return bush;
}