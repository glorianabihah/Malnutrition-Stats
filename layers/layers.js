var wms_layers = [];

var format_WcedDistricts_0 = new ol.format.GeoJSON();
var features_WcedDistricts_0 = format_WcedDistricts_0.readFeatures(json_WcedDistricts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WcedDistricts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WcedDistricts_0.addFeatures(features_WcedDistricts_0);
var lyr_WcedDistricts_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WcedDistricts_0, 
                style: style_WcedDistricts_0,
                popuplayertitle: 'Wced Districts',
                interactive: true,
    title: 'Wced Districts<br />\
    <img src="styles/legend/WcedDistricts_0_0.png" /> 15 - 19.2<br />\
    <img src="styles/legend/WcedDistricts_0_1.png" /> 19.2 - 21.2<br />\
    <img src="styles/legend/WcedDistricts_0_2.png" /> 21.2 - 22<br />\
    <img src="styles/legend/WcedDistricts_0_3.png" /> 22 - 24.8<br />\
    <img src="styles/legend/WcedDistricts_0_4.png" /> 24.8 - 28<br />' });

lyr_WcedDistricts_0.setVisible(true);
var layersList = [lyr_WcedDistricts_0];
lyr_WcedDistricts_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'WCED Districts': 'WCED Districts', 'HECTARES': 'HECTARES', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', '11_malnutrition_vs_quintile_Child Malnutrition Rate (%)': '11_malnutrition_vs_quintile_Child Malnutrition Rate (%)', '11_malnutrition_vs_quintile_Average School Quintile': '11_malnutrition_vs_quintile_Average School Quintile', });
lyr_WcedDistricts_0.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'WCED Districts': 'TextEdit', 'HECTARES': 'Hidden', 'Shape_STAr': 'Hidden', 'Shape_STLe': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', '11_malnutrition_vs_quintile_Child Malnutrition Rate (%)': 'Range', '11_malnutrition_vs_quintile_Average School Quintile': 'Hidden', });
lyr_WcedDistricts_0.set('fieldLabels', {'WCED Districts': 'inline label - always visible', '11_malnutrition_vs_quintile_Child Malnutrition Rate (%)': 'inline label - always visible', });
lyr_WcedDistricts_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});