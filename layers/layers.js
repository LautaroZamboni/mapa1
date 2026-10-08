var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lagunas_cuencas_1 = new ol.format.GeoJSON();
var features_Lagunas_cuencas_1 = format_Lagunas_cuencas_1.readFeatures(json_Lagunas_cuencas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagunas_cuencas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagunas_cuencas_1.addFeatures(features_Lagunas_cuencas_1);
var lyr_Lagunas_cuencas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagunas_cuencas_1, 
                style: style_Lagunas_cuencas_1,
                popuplayertitle: 'Lagunas_cuencas',
                interactive: true,
                title: '<img src="styles/legend/Lagunas_cuencas_1.png" /> Lagunas_cuencas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lagunas_cuencas_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lagunas_cuencas_1];
lyr_Lagunas_cuencas_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area m2': 'Area m2', 'Area (Ha)': 'Area (Ha)', });
lyr_Lagunas_cuencas_1.set('fieldImages', {'fid': '', 'id': '', 'Area m2': '', 'Area (Ha)': '', });
lyr_Lagunas_cuencas_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Area m2': 'no label', 'Area (Ha)': 'no label', });
lyr_Lagunas_cuencas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});