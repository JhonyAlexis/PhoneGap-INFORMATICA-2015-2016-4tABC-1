window.addEventListener('load', function() {

     $JSView.declareMenu({
        
        viewMenuA: {
            url: '/viewMenuA',
            template: 'views/viewMenuA.html',
            controller: 'viewMenuA'
        },
        
    	viewMenuB: function(e){
        $JSView.dataView({'title': 'Templates'},e)
    	},
    
    	viewMenuC: function(e){
        $JSView.dataView({'title': 'Examples initLoadMore'},e)
	},
    
    	viewMenuD: function(e){
        $JSView.dataView({'title': 'Examples initReload'},e)
    	}
    });
    
    
    
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
    */
    $JSView.declareView({ 
        inici: {
            url: '/inici',
            template: 'views/inici.html',
            controller: 'inici'
        },
        diumenge: {
            url: '/diumenge',
            template: 'views/diumenge.html',
            controller: 'diumenge'
        },
        dilluns: {
            url: '/dilluns',
            template: 'views/dilluns.html',
            controller: 'dilluns'
        },
        dimarts: {
            url: '/dimarts',
            template: 'views/dimarts.html',
            controller: 'dimarts'
        },
        dimecres: {
            url: '/dimecres',
            template: 'views/dimecres.html',
            controller: 'dimecres'
        },
        dijous: {
            url: '/dijous',
            template: 'views/dijous.html',
            controller: 'dijous'
        },
        divendres: {
            url: '/divendres',
            template: 'views/divendres.html',
            controller: 'divendres'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modal_info_aeroport: {
            url: '/modal_info_aeroport',
            template: 'views/modal_info_aeroport.html',
            controller: 'modal_info_aeroport'
        },
        modal_info_coliseo: {
            url: '/modal_info_coliseo',
            template: 'views/modal_info_coliseo.html',
            controller: 'modal_info_coliseo'
        },
        modal_info_narvona: {
            url: '/modal_info_narvona',
            template: 'views/modal_info_narvona.html',
            controller: 'modal_info_narvona'
        },
        modal_info_sanpietro: {
            url: '/modal_info_sanpietro',
            template: 'views/modal_info_sanpietro.html',
            controller: 'modal_info_sanpietro'
        },
        mapa_roma: {
            url: '/mapa_roma',
            template: 'views/mapa_roma.html',
            controller: 'mapa_roma'
        },
        mapa_florencia: {
            url: '/mapa_florencia',
            template: 'views/mapa_florencia.html',
            controller: 'mapa_florencia'
        },
        mapa_venecia: {
            url: '/mapa_venecia',
            template: 'views/mapa_venecia.html',
            controller: 'mapa_venecia'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('inici');
 
}, false);
