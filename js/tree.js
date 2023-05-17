function tree() {

    const tree= new THREE.Group();

	const geometry = new THREE.SphereGeometry( 5.5, 12, 5 );
	const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
	const bushmesh1 = new THREE.Mesh( geometry, material );
	bushmesh1.position.set(3,10,0);
	tree.add( bushmesh1 );
    const bushmesh2 = new THREE.Mesh( geometry, material );
	bushmesh2.position.set(-3,10,0);
	tree.add( bushmesh2 );
    const bushmesh3 = new THREE.Mesh( geometry, material );
	bushmesh3.position.set(0,14,1);
	tree.add( bushmesh3 );
    
    const geometry1 = new THREE.BoxGeometry( 4, 15, 3 );
	const material1 = new THREE.MeshPhongMaterial( { color: 0xcc7744 } );
    const treebody = new THREE.Mesh(geometry1,material1);
    treebody.position.set(0,0,0);
    tree.add(treebody);
    

    return tree;
}