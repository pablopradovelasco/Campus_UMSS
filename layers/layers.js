ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([802879.789898, 8074412.641684, 803690.438671, 8074833.051359]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.290000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Tubos_Sanit_UMSS_1 = new ol.format.GeoJSON();
var features_Tubos_Sanit_UMSS_1 = format_Tubos_Sanit_UMSS_1.readFeatures(json_Tubos_Sanit_UMSS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Tubos_Sanit_UMSS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tubos_Sanit_UMSS_1.addFeatures(features_Tubos_Sanit_UMSS_1);
var lyr_Tubos_Sanit_UMSS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tubos_Sanit_UMSS_1, 
                style: style_Tubos_Sanit_UMSS_1,
                interactive: true,
                title: '<img src="styles/legend/Tubos_Sanit_UMSS_1.png" /> Tubos_Sanit_UMSS'
            });
var format_CamInsp_Sanit_UMSS_2 = new ol.format.GeoJSON();
var features_CamInsp_Sanit_UMSS_2 = format_CamInsp_Sanit_UMSS_2.readFeatures(json_CamInsp_Sanit_UMSS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CamInsp_Sanit_UMSS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CamInsp_Sanit_UMSS_2.addFeatures(features_CamInsp_Sanit_UMSS_2);
var lyr_CamInsp_Sanit_UMSS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CamInsp_Sanit_UMSS_2, 
                style: style_CamInsp_Sanit_UMSS_2,
                interactive: true,
                title: '<img src="styles/legend/CamInsp_Sanit_UMSS_2.png" /> CamInsp_Sanit_UMSS'
            });
var format_Campus_UMSS_Tubos_SEMAPA_3 = new ol.format.GeoJSON();
var features_Campus_UMSS_Tubos_SEMAPA_3 = format_Campus_UMSS_Tubos_SEMAPA_3.readFeatures(json_Campus_UMSS_Tubos_SEMAPA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Campus_UMSS_Tubos_SEMAPA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_UMSS_Tubos_SEMAPA_3.addFeatures(features_Campus_UMSS_Tubos_SEMAPA_3);
var lyr_Campus_UMSS_Tubos_SEMAPA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campus_UMSS_Tubos_SEMAPA_3, 
                style: style_Campus_UMSS_Tubos_SEMAPA_3,
                interactive: true,
                title: '<img src="styles/legend/Campus_UMSS_Tubos_SEMAPA_3.png" /> Campus_UMSS_Tubos_SEMAPA'
            });
var format_Campus_UMSS_Tubos_Pozos_4 = new ol.format.GeoJSON();
var features_Campus_UMSS_Tubos_Pozos_4 = format_Campus_UMSS_Tubos_Pozos_4.readFeatures(json_Campus_UMSS_Tubos_Pozos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Campus_UMSS_Tubos_Pozos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_UMSS_Tubos_Pozos_4.addFeatures(features_Campus_UMSS_Tubos_Pozos_4);
var lyr_Campus_UMSS_Tubos_Pozos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campus_UMSS_Tubos_Pozos_4, 
                style: style_Campus_UMSS_Tubos_Pozos_4,
                interactive: true,
                title: '<img src="styles/legend/Campus_UMSS_Tubos_Pozos_4.png" /> Campus_UMSS_Tubos_Pozos'
            });
var format_Campus_UMSS_Cam_Pozos_5 = new ol.format.GeoJSON();
var features_Campus_UMSS_Cam_Pozos_5 = format_Campus_UMSS_Cam_Pozos_5.readFeatures(json_Campus_UMSS_Cam_Pozos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Campus_UMSS_Cam_Pozos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_UMSS_Cam_Pozos_5.addFeatures(features_Campus_UMSS_Cam_Pozos_5);
var lyr_Campus_UMSS_Cam_Pozos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campus_UMSS_Cam_Pozos_5, 
                style: style_Campus_UMSS_Cam_Pozos_5,
                interactive: true,
                title: '<img src="styles/legend/Campus_UMSS_Cam_Pozos_5.png" /> Campus_UMSS_Cam_Pozos'
            });
var format_Campus_UMSS_Pozos_6 = new ol.format.GeoJSON();
var features_Campus_UMSS_Pozos_6 = format_Campus_UMSS_Pozos_6.readFeatures(json_Campus_UMSS_Pozos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Campus_UMSS_Pozos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_UMSS_Pozos_6.addFeatures(features_Campus_UMSS_Pozos_6);
var lyr_Campus_UMSS_Pozos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campus_UMSS_Pozos_6, 
                style: style_Campus_UMSS_Pozos_6,
                interactive: true,
                title: '<img src="styles/legend/Campus_UMSS_Pozos_6.png" /> Campus_UMSS_Pozos'
            });
var format_Acometidas_SEMAPA_7 = new ol.format.GeoJSON();
var features_Acometidas_SEMAPA_7 = format_Acometidas_SEMAPA_7.readFeatures(json_Acometidas_SEMAPA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Acometidas_SEMAPA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acometidas_SEMAPA_7.addFeatures(features_Acometidas_SEMAPA_7);
var lyr_Acometidas_SEMAPA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acometidas_SEMAPA_7, 
                style: style_Acometidas_SEMAPA_7,
                interactive: true,
    title: 'Acometidas_SEMAPA<br />\
    <img src="styles/legend/Acometidas_SEMAPA_7_0.png" /> Alcantarillado<br />\
    <img src="styles/legend/Acometidas_SEMAPA_7_1.png" /> Agua y Alcantarillado<br />\
    <img src="styles/legend/Acometidas_SEMAPA_7_2.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(false);lyr_Tubos_Sanit_UMSS_1.setVisible(true);lyr_CamInsp_Sanit_UMSS_2.setVisible(true);lyr_Campus_UMSS_Tubos_SEMAPA_3.setVisible(true);lyr_Campus_UMSS_Tubos_Pozos_4.setVisible(true);lyr_Campus_UMSS_Cam_Pozos_5.setVisible(true);lyr_Campus_UMSS_Pozos_6.setVisible(true);lyr_Acometidas_SEMAPA_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Tubos_Sanit_UMSS_1,lyr_CamInsp_Sanit_UMSS_2,lyr_Campus_UMSS_Tubos_SEMAPA_3,lyr_Campus_UMSS_Tubos_Pozos_4,lyr_Campus_UMSS_Cam_Pozos_5,lyr_Campus_UMSS_Pozos_6,lyr_Acometidas_SEMAPA_7];
lyr_Tubos_Sanit_UMSS_1.set('fieldAliases', {'Color': 'Color', 'Tipo_Tubo': 'Tipo_Tubo', 'Material': 'Material', 'Diam_Pulg': 'Diam_Pulg', 'Long_Pla_m': 'Long_Pla_m', 'Long_map_m': 'Long_map_m', });
lyr_CamInsp_Sanit_UMSS_2.set('fieldAliases', {'Entity': 'Entity', 'Cod_Cam': 'Cod_Cam', 'DimLado_cm': 'DimLado_cm', });
lyr_Campus_UMSS_Tubos_SEMAPA_3.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Campus_UMSS_Tubos_Pozos_4.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Campus_UMSS_Cam_Pozos_5.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Campus_UMSS_Pozos_6.set('fieldAliases', {'Id': 'Id', });
lyr_Acometidas_SEMAPA_7.set('fieldAliases', {'Id': 'Id', 'Descripcio': 'Descripcio', 'Cuenta': 'Cuenta', 'Nro_Med': 'Nro_Med', 'Agua': 'Agua', 'Alcanta': 'Alcanta', 'Observ': 'Observ', 'Acometida': 'Acometida', 'Foto': 'Foto', });
lyr_Tubos_Sanit_UMSS_1.set('fieldImages', {'Color': 'Range', 'Tipo_Tubo': 'TextEdit', 'Material': 'TextEdit', 'Diam_Pulg': 'TextEdit', 'Long_Pla_m': 'TextEdit', 'Long_map_m': 'TextEdit', });
lyr_CamInsp_Sanit_UMSS_2.set('fieldImages', {'Entity': 'TextEdit', 'Cod_Cam': 'TextEdit', 'DimLado_cm': 'Range', });
lyr_Campus_UMSS_Tubos_SEMAPA_3.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Campus_UMSS_Tubos_Pozos_4.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Campus_UMSS_Cam_Pozos_5.set('fieldImages', {'FID_': '', 'Entity': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', });
lyr_Campus_UMSS_Pozos_6.set('fieldImages', {'Id': 'Range', });
lyr_Acometidas_SEMAPA_7.set('fieldImages', {'Id': 'Range', 'Descripcio': 'TextEdit', 'Cuenta': 'TextEdit', 'Nro_Med': 'TextEdit', 'Agua': 'TextEdit', 'Alcanta': 'TextEdit', 'Observ': 'TextEdit', 'Acometida': 'Range', 'Foto': 'ExternalResource', });
lyr_Tubos_Sanit_UMSS_1.set('fieldLabels', {'Color': 'no label', 'Tipo_Tubo': 'header label', 'Material': 'header label', 'Diam_Pulg': 'header label', 'Long_Pla_m': 'header label', 'Long_map_m': 'header label', });
lyr_CamInsp_Sanit_UMSS_2.set('fieldLabels', {'Entity': 'no label', 'Cod_Cam': 'header label', 'DimLado_cm': 'header label', });
lyr_Campus_UMSS_Tubos_SEMAPA_3.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_Campus_UMSS_Tubos_Pozos_4.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_Campus_UMSS_Cam_Pozos_5.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_Campus_UMSS_Pozos_6.set('fieldLabels', {'Id': 'no label', });
lyr_Acometidas_SEMAPA_7.set('fieldLabels', {'Id': 'header label', 'Descripcio': 'header label', 'Cuenta': 'header label', 'Nro_Med': 'header label', 'Agua': 'header label', 'Alcanta': 'header label', 'Observ': 'header label', 'Acometida': 'header label', 'Foto': 'header label', });
lyr_Acometidas_SEMAPA_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});