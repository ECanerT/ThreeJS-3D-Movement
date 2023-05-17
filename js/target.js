function Target() {

    const targetenemy = new THREE.Group();
    const targetg1 = new THREE.BoxBufferGeometry(5,6,1.5);
    const targetm1 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const target1 = new THREE.Mesh( targetg1, targetm1 );
    target1.position.set(-2, 2, -2);
    targetenemy.add( target1 );

    const targetg2 = new THREE.BoxBufferGeometry(2.5,3,1.5);
    const targetm2 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const target2 = new THREE.Mesh( targetg2, targetm2 );
    target2.position.set(-2, 6, -2);
    targetenemy.add( target2 );

    const targetg3 = new THREE.BoxBufferGeometry(1,5,0.5);
    const targetm3 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const target3 = new THREE.Mesh( targetg3, targetm3 );
    target3.position.set(-2, -2, -2);
    targetenemy.add( target3 );
    
    const targetg4 = new THREE.BoxBufferGeometry(3,0.1,3);
    const targetm4 = new THREE.MeshPhongMaterial( { color: 0xff3333 } );
    const target4 = new THREE.Mesh( targetg4, targetm4 );
    target4.position.set(-2, -4.5, -2);
    targetenemy.add( target4 );

    return targetenemy;
}