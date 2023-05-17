function Table() {

    const table = new THREE.Group()

            //MASA GOVDE
            const gtable1 = new THREE.BoxGeometry(15,1,8);
            const ltable1 = new THREE.TextureLoader();
            const mtable1 = new THREE.MeshBasicMaterial({  flatShading:  true,
                map: ltable1.load('wood.jpg'),
            })
            const tablebody = new THREE.Mesh(gtable1, mtable1);
            tablebody.position.set(-5,3.5,0);
            table.add(tablebody);
            
            //MASA BACAKLAR
            const gleg = new THREE.BoxGeometry(0.5,5,0.5);
            const mleg = new THREE.MeshPhysicalMaterial({ 
                color : 0xff7761,
                metalness: 0,
                roughness:1,
                thickness:1, 
            })
            const leg1= new THREE.Mesh(gleg, mleg);
            leg1.position.set(-12.2,1,3.7);
            table.add(leg1);
            const leg2 = new THREE.Mesh(gleg, mleg);
            leg2.position.set(2.2,1,3.7);
            table.add(leg2);
            const leg3 = new THREE.Mesh(gleg, mleg);
            leg3.position.set(-12.2,1,-3.7);
            table.add(leg3);
            const leg4 = new THREE.Mesh(gleg, mleg);
            leg4.position.set(2.2,1,-3.7);
            table.add(leg4);

            // MASA DESTEK
            const gcross = new THREE.BoxGeometry(14.7,4.5,0.1);
            const lcross= new THREE.TextureLoader();
            const mcross = [
                new THREE.MeshPhysicalMaterial({map: lcross.load('cross1.png'),transmission:1,metalness: 0,roughness:0,}),
                new THREE.MeshPhysicalMaterial({map: lcross.load('cross1.png'),transmission:1,metalness: 0,roughness:0,}),
                new THREE.MeshPhysicalMaterial({map: lcross.load('cross1.png'),transmission:1,metalness: 0,roughness:0,}),
                new THREE.MeshPhysicalMaterial({map: lcross.load('cross1.png'),transmission:1,metalness: 0,roughness:0,}),
                new THREE.MeshPhysicalMaterial({map: lcross.load('cross1.png'),transmission:1,metalness: 0,roughness:0,}),
                new THREE.MeshPhysicalMaterial({map: lcross.load('cross1.png'),transmission:1,metalness: 0,roughness:0,}),
            ];
            const cross = new THREE.Mesh(gcross, mcross);
            cross.position.set(-5,1,3.8);
            const cross1 = new THREE.Mesh(gcross, mcross);
            cross1.position.set(-5,1,-3.6);
            
            //SEFFAF CAM VAZO
            const gvase = new THREE.CylinderGeometry(2.5,1.4,5);
            const mvase = [
                new THREE.MeshPhysicalMaterial({ 
                metalness: 0,
                roughness:0,
                thickness:1,
                transmission:0.9, 
            }),
            new THREE.MeshPhysicalMaterial({
                metalness: 0,
                roughness:0,
                thickness:1, 
                transmission:0.99, 
            }),
            new THREE.MeshPhysicalMaterial({ 
                metalness: 0.2,
                roughness:0.2,
                thickness:1,
                transmission:0.9, 
            }),
            ];
            const vase = new THREE.Mesh(gvase, mvase);
            vase.position.set(-5.4,6.1,0);
            table.add(vase);



    return table;
}