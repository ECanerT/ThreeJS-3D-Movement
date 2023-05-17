function StickMan() {

    const targetenemy = new THREE.Group();
    const targetg1 = new THREE.BoxBufferGeometry(5,4,2);
    const targetm1 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const body = new THREE.Mesh( targetg1, targetm1 );
    body.position.set(-2, 2.4, -2);
    targetenemy.add( body );
    
    const bodyg1 = new THREE.BoxBufferGeometry(4,4,1.8);
    const bodym1 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const body1 = new THREE.Mesh( bodyg1, bodym1 );
    body1.position.set(-2, 1, -2);
    targetenemy.add( body1 );

    const targetg2 = new THREE.BoxBufferGeometry(2.5,2.4,2);
    const targetm2 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const head = new THREE.Mesh( targetg2, targetm2 );
    head.position.set(-2, 6.2, -2);
    targetenemy.add( head );

    const neck1 = new THREE.BoxBufferGeometry(0.8,1,1);
    const neck2 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    const neck = new THREE.Mesh( neck1, neck2 );
    neck.position.set(-2, 5, -2);
    targetenemy.add( neck );

    const larmg = new THREE.BoxBufferGeometry(1.3,5,1);
    const larmm = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
    const larm = new THREE.Mesh( larmg, larmm );
    larm.position.set(-5.4, 1.8, -2);
    larm.rotation.set(0, 0, -0.1);
    targetenemy.add( larm );
    const rarmg = new THREE.BoxBufferGeometry(1.3,5,1);
    const rarmm = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
    const rarm = new THREE.Mesh( rarmg, rarmm );
    rarm.position.set(1.4, 1.8, -2);
    rarm.rotation.set(0, 0, 0.1);
    targetenemy.add( rarm );
    const larmg1 = new THREE.BoxBufferGeometry(1.4,1,1);
    const larmm1 = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
    const larm1 = new THREE.Mesh( larmg1, larmm1 );
    larm1.position.set(-5.7, -1.1, -2);
    larm1.rotation.set(0, 0, -0.1);
    targetenemy.add( larm1 );
    const rarmg1 = new THREE.BoxBufferGeometry(1.4,1,1);
    const rarmm1 = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
    const rarm1 = new THREE.Mesh( rarmg1, rarmm1 );
    rarm1.position.set(1.7, -1.1, -2);
    rarm1.rotation.set(0, 0, 0.1);
    targetenemy.add( rarm1 );

    const targetg3 = new THREE.BoxBufferGeometry(1.6,5,1.2);
    const targetm3 = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
    const leg1 = new THREE.Mesh( targetg3, targetm3 );
    leg1.position.set(-3, -2, -2.1);
    targetenemy.add( leg1 );
    const leg12g = new THREE.BoxBufferGeometry(1.6,5,1.2);
    const leg12m = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
    const leg12 = new THREE.Mesh( leg12g, leg12m );
    leg12.position.set(-3, -5, -2.1);
    targetenemy.add( leg12 );
    
    const targetg4 = new THREE.BoxBufferGeometry(1.7,0.3,2);
    const targetm4 = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
    const foot = new THREE.Mesh( targetg4, targetm4 );
    foot.position.set(-3, -7.5, -1.3);
    targetenemy.add( foot );

    const rlegg1 = new THREE.BoxBufferGeometry(1.6,5,1.2);
    const rlegm1 = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
    const rleg = new THREE.Mesh( rlegg1, rlegm1 );
    rleg.position.set(-0.9, -2, -2.1);
    targetenemy.add( rleg );
    const rlegg2 = new THREE.BoxBufferGeometry(1.6,5,1.2);
    const rlegm2 = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
    const rleg1 = new THREE.Mesh( rlegg2, rlegm2 );
    rleg1.position.set(-0.9, -5, -2.1);
    targetenemy.add( rleg1 );
    
    const rfootg = new THREE.BoxBufferGeometry(1.7,0.3,2);
    const rfootm = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
    const rfoot = new THREE.Mesh( rfootg, rfootm );
    rfoot.position.set(-0.9, -7.5, -1.3);
    targetenemy.add( rfoot );

    return targetenemy;
}