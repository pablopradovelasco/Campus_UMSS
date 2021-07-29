ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([802852.331895, 8074368.239985, 803677.803324, 8074813.533735]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Estruc_Elec_UMSS_1 = new ol.format.GeoJSON();
var features_Estruc_Elec_UMSS_1 = format_Estruc_Elec_UMSS_1.readFeatures(json_Estruc_Elec_UMSS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Estruc_Elec_UMSS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estruc_Elec_UMSS_1.addFeatures(features_Estruc_Elec_UMSS_1);
var lyr_Estruc_Elec_UMSS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estruc_Elec_UMSS_1, 
                style: style_Estruc_Elec_UMSS_1,
                interactive: true,
                title: '<img src="styles/legend/Estruc_Elec_UMSS_1.png" /> Estruc_Elec_UMSS'
            });
var format_Campus_UMSS_Tubos_Sanit_2 = new ol.format.GeoJSON();
var features_Campus_UMSS_Tubos_Sanit_2 = format_Campus_UMSS_Tubos_Sanit_2.readFeatures(json_Campus_UMSS_Tubos_Sanit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Campus_UMSS_Tubos_Sanit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_UMSS_Tubos_Sanit_2.addFeatures(features_Campus_UMSS_Tubos_Sanit_2);
var lyr_Campus_UMSS_Tubos_Sanit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campus_UMSS_Tubos_Sanit_2, 
                style: style_Campus_UMSS_Tubos_Sanit_2,
                interactive: true,
                title: '<img src="styles/legend/Campus_UMSS_Tubos_Sanit_2.png" /> Campus_UMSS_Tubos_Sanit'
            });
var format_Campus_UMSS_Cam_Sanit_3 = new ol.format.GeoJSON();
var features_Campus_UMSS_Cam_Sanit_3 = format_Campus_UMSS_Cam_Sanit_3.readFeatures(json_Campus_UMSS_Cam_Sanit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Campus_UMSS_Cam_Sanit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_UMSS_Cam_Sanit_3.addFeatures(features_Campus_UMSS_Cam_Sanit_3);
var lyr_Campus_UMSS_Cam_Sanit_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campus_UMSS_Cam_Sanit_3, 
                style: style_Campus_UMSS_Cam_Sanit_3,
                interactive: true,
                title: '<img src="styles/legend/Campus_UMSS_Cam_Sanit_3.png" /> Campus_UMSS_Cam_Sanit'
            });
var format_Trafo_Elec_UMSS_4 = new ol.format.GeoJSON();
var features_Trafo_Elec_UMSS_4 = format_Trafo_Elec_UMSS_4.readFeatures(json_Trafo_Elec_UMSS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Trafo_Elec_UMSS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trafo_Elec_UMSS_4.addFeatures(features_Trafo_Elec_UMSS_4);
var lyr_Trafo_Elec_UMSS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trafo_Elec_UMSS_4, 
                style: style_Trafo_Elec_UMSS_4,
                interactive: true,
                title: '<img src="styles/legend/Trafo_Elec_UMSS_4.png" /> Trafo_Elec_UMSS'
            });
var format_Linea_Media_UMSS_5 = new ol.format.GeoJSON();
var features_Linea_Media_UMSS_5 = format_Linea_Media_UMSS_5.readFeatures(json_Linea_Media_UMSS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Linea_Media_UMSS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linea_Media_UMSS_5.addFeatures(features_Linea_Media_UMSS_5);
var lyr_Linea_Media_UMSS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Linea_Media_UMSS_5, 
                style: style_Linea_Media_UMSS_5,
                interactive: true,
                title: '<img src="styles/legend/Linea_Media_UMSS_5.png" /> Linea_Media_UMSS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Estruc_Elec_UMSS_1.setVisible(true);lyr_Campus_UMSS_Tubos_Sanit_2.setVisible(true);lyr_Campus_UMSS_Cam_Sanit_3.setVisible(true);lyr_Trafo_Elec_UMSS_4.setVisible(true);lyr_Linea_Media_UMSS_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Estruc_Elec_UMSS_1,lyr_Campus_UMSS_Tubos_Sanit_2,lyr_Campus_UMSS_Cam_Sanit_3,lyr_Trafo_Elec_UMSS_4,lyr_Linea_Media_UMSS_5];
lyr_Estruc_Elec_UMSS_1.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', });
lyr_Campus_UMSS_Tubos_Sanit_2.set('fieldAliases', {'Color': 'Color', 'Tipo_Tubo': 'Tipo_Tubo', 'Material': 'Material', 'Diam_Pulg': 'Diam_Pulg', 'Long_Pla_m': 'Long_Pla_m', 'Long_map_m': 'Long_map_m', });
lyr_Campus_UMSS_Cam_Sanit_3.set('fieldAliases', {'Entity': 'Entity', 'Cod_Cam': 'Cod_Cam', 'DimLado_cm': 'DimLado_cm', });
lyr_Trafo_Elec_UMSS_4.set('fieldAliases', {'Id': 'Id', 'Tipo': 'Tipo', 'Cap_KvA': 'Cap_KvA', 'Pertenence': 'Pertenence', 'Fabricante': 'Fabricante', 'Antig_año': 'Antig_año', });
lyr_Linea_Media_UMSS_5.set('fieldAliases', {'id': 'id', 'Conductor': 'Conductor', 'Long_map_m': 'Long_map_m', });
lyr_Estruc_Elec_UMSS_1.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Campus_UMSS_Tubos_Sanit_2.set('fieldImages', {'Color': 'Range', 'Tipo_Tubo': 'TextEdit', 'Material': 'TextEdit', 'Diam_Pulg': 'TextEdit', 'Long_Pla_m': 'TextEdit', 'Long_map_m': 'TextEdit', });
lyr_Campus_UMSS_Cam_Sanit_3.set('fieldImages', {'Entity': 'TextEdit', 'Cod_Cam': 'TextEdit', 'DimLado_cm': 'Range', });
lyr_Trafo_Elec_UMSS_4.set('fieldImages', {'Id': 'Range', 'Tipo': 'TextEdit', 'Cap_KvA': 'Range', 'Pertenence': 'TextEdit', 'Fabricante': 'TextEdit', 'Antig_año': 'Range', });
lyr_Linea_Media_UMSS_5.set('fieldImages', {'id': 'TextEdit', 'Conductor': 'TextEdit', 'Long_map_m': 'TextEdit', });
lyr_Estruc_Elec_UMSS_1.set('fieldLabels', {'id': 'header label', 'Tipo': 'header label', });
lyr_Campus_UMSS_Tubos_Sanit_2.set('fieldLabels', {'Color': 'no label', 'Tipo_Tubo': 'header label', 'Material': 'header label', 'Diam_Pulg': 'header label', 'Long_Pla_m': 'header label', 'Long_map_m': 'header label', });
lyr_Campus_UMSS_Cam_Sanit_3.set('fieldLabels', {'Entity': 'no label', 'Cod_Cam': 'header label', 'DimLado_cm': 'header label', });
lyr_Trafo_Elec_UMSS_4.set('fieldLabels', {'Id': 'header label', 'Tipo': 'header label', 'Cap_KvA': 'header label', 'Pertenence': 'header label', 'Fabricante': 'header label', 'Antig_año': 'no label', });
lyr_Linea_Media_UMSS_5.set('fieldLabels', {'id': 'header label', 'Conductor': 'inline label', 'Long_map_m': 'no label', });
lyr_Linea_Media_UMSS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});