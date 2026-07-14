ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32737").setExtent([519167.512200, 9263192.936398, 521353.108238, 9264379.318603]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FDMFIBRE12FO_1 = new ol.format.GeoJSON();
var features_FDMFIBRE12FO_1 = format_FDMFIBRE12FO_1.readFeatures(json_FDMFIBRE12FO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FDMFIBRE12FO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDMFIBRE12FO_1.addFeatures(features_FDMFIBRE12FO_1);
var lyr_FDMFIBRE12FO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDMFIBRE12FO_1, 
                style: style_FDMFIBRE12FO_1,
                popuplayertitle: 'FDM-FIBRE 12 FO',
                interactive: false,
                title: '<img src="styles/legend/FDMFIBRE12FO_1.png" /> FDM-FIBRE 12 FO'
            });
var format_FDMFIBRE24FO_2 = new ol.format.GeoJSON();
var features_FDMFIBRE24FO_2 = format_FDMFIBRE24FO_2.readFeatures(json_FDMFIBRE24FO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FDMFIBRE24FO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDMFIBRE24FO_2.addFeatures(features_FDMFIBRE24FO_2);
var lyr_FDMFIBRE24FO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDMFIBRE24FO_2, 
                style: style_FDMFIBRE24FO_2,
                popuplayertitle: 'FDM-FIBRE 24 FO',
                interactive: false,
                title: '<img src="styles/legend/FDMFIBRE24FO_2.png" /> FDM-FIBRE 24 FO'
            });
var format_FDMFIBRE48FO_3 = new ol.format.GeoJSON();
var features_FDMFIBRE48FO_3 = format_FDMFIBRE48FO_3.readFeatures(json_FDMFIBRE48FO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FDMFIBRE48FO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDMFIBRE48FO_3.addFeatures(features_FDMFIBRE48FO_3);
var lyr_FDMFIBRE48FO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDMFIBRE48FO_3, 
                style: style_FDMFIBRE48FO_3,
                popuplayertitle: 'FDM-FIBRE 48 FO',
                interactive: false,
                title: '<img src="styles/legend/FDMFIBRE48FO_3.png" /> FDM-FIBRE 48 FO'
            });
var format_FDMFIBRE96FO_4 = new ol.format.GeoJSON();
var features_FDMFIBRE96FO_4 = format_FDMFIBRE96FO_4.readFeatures(json_FDMFIBRE96FO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FDMFIBRE96FO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDMFIBRE96FO_4.addFeatures(features_FDMFIBRE96FO_4);
var lyr_FDMFIBRE96FO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDMFIBRE96FO_4, 
                style: style_FDMFIBRE96FO_4,
                popuplayertitle: 'FDM-FIBRE 96 FO',
                interactive: false,
                title: '<img src="styles/legend/FDMFIBRE96FO_4.png" /> FDM-FIBRE 96 FO'
            });
var format_FDMFIBRE144FO_5 = new ol.format.GeoJSON();
var features_FDMFIBRE144FO_5 = format_FDMFIBRE144FO_5.readFeatures(json_FDMFIBRE144FO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FDMFIBRE144FO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDMFIBRE144FO_5.addFeatures(features_FDMFIBRE144FO_5);
var lyr_FDMFIBRE144FO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDMFIBRE144FO_5, 
                style: style_FDMFIBRE144FO_5,
                popuplayertitle: 'FDM-FIBRE 144 FO',
                interactive: false,
                title: '<img src="styles/legend/FDMFIBRE144FO_5.png" /> FDM-FIBRE 144 FO'
            });
var format_FDT_6 = new ol.format.GeoJSON();
var features_FDT_6 = format_FDT_6.readFeatures(json_FDT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FDT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDT_6.addFeatures(features_FDT_6);
var lyr_FDT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDT_6, 
                style: style_FDT_6,
                popuplayertitle: 'FDT',
                interactive: false,
                title: '<img src="styles/legend/FDT_6.png" /> FDT'
            });
var format_FATOUTDOORS_7 = new ol.format.GeoJSON();
var features_FATOUTDOORS_7 = format_FATOUTDOORS_7.readFeatures(json_FATOUTDOORS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FATOUTDOORS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FATOUTDOORS_7.addFeatures(features_FATOUTDOORS_7);
var lyr_FATOUTDOORS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FATOUTDOORS_7, 
                style: style_FATOUTDOORS_7,
                popuplayertitle: 'FAT OUTDOORS',
                interactive: false,
                title: '<img src="styles/legend/FATOUTDOORS_7.png" /> FAT OUTDOORS'
            });
var format_FATINDOORS_8 = new ol.format.GeoJSON();
var features_FATINDOORS_8 = format_FATINDOORS_8.readFeatures(json_FATINDOORS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FATINDOORS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FATINDOORS_8.addFeatures(features_FATINDOORS_8);
var lyr_FATINDOORS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FATINDOORS_8, 
                style: style_FATINDOORS_8,
                popuplayertitle: 'FAT INDOORS',
                interactive: false,
                title: '<img src="styles/legend/FATINDOORS_8.png" /> FAT INDOORS'
            });
var format_FibreCable_9 = new ol.format.GeoJSON();
var features_FibreCable_9 = format_FibreCable_9.readFeatures(json_FibreCable_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FibreCable_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FibreCable_9.addFeatures(features_FibreCable_9);
var lyr_FibreCable_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FibreCable_9, 
                style: style_FibreCable_9,
                popuplayertitle: 'Fibre Cable',
                interactive: false,
                title: '<img src="styles/legend/FibreCable_9.png" /> Fibre Cable'
            });
var format_GPSONFATINFLUENCE_10 = new ol.format.GeoJSON();
var features_GPSONFATINFLUENCE_10 = format_GPSONFATINFLUENCE_10.readFeatures(json_GPSONFATINFLUENCE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_GPSONFATINFLUENCE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSONFATINFLUENCE_10.addFeatures(features_GPSONFATINFLUENCE_10);
var lyr_GPSONFATINFLUENCE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSONFATINFLUENCE_10, 
                style: style_GPSONFATINFLUENCE_10,
                popuplayertitle: 'GPSON-FAT INFLUENCE',
                interactive: false,
                title: '<img src="styles/legend/GPSONFATINFLUENCE_10.png" /> GPSON-FAT INFLUENCE'
            });
var format_GPSONSPLICECLOSURE_11 = new ol.format.GeoJSON();
var features_GPSONSPLICECLOSURE_11 = format_GPSONSPLICECLOSURE_11.readFeatures(json_GPSONSPLICECLOSURE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_GPSONSPLICECLOSURE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSONSPLICECLOSURE_11.addFeatures(features_GPSONSPLICECLOSURE_11);
var lyr_GPSONSPLICECLOSURE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSONSPLICECLOSURE_11, 
                style: style_GPSONSPLICECLOSURE_11,
                popuplayertitle: 'GPSON-SPLICE CLOSURE',
                interactive: false,
                title: '<img src="styles/legend/GPSONSPLICECLOSURE_11.png" /> GPSON-SPLICE CLOSURE'
            });
var format_Boundary_12 = new ol.format.GeoJSON();
var features_Boundary_12 = format_Boundary_12.readFeatures(json_Boundary_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Boundary_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_12.addFeatures(features_Boundary_12);
var lyr_Boundary_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_12, 
                style: style_Boundary_12,
                popuplayertitle: 'Boundary',
                interactive: false,
                title: '<img src="styles/legend/Boundary_12.png" /> Boundary'
            });
var format_POLES_13 = new ol.format.GeoJSON();
var features_POLES_13 = format_POLES_13.readFeatures(json_POLES_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_POLES_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLES_13.addFeatures(features_POLES_13);
var lyr_POLES_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLES_13, 
                style: style_POLES_13,
                popuplayertitle: 'POLES',
                interactive: false,
                title: '<img src="styles/legend/POLES_13.png" /> POLES'
            });
var format_FATOUTDOORINFORMATION_14 = new ol.format.GeoJSON();
var features_FATOUTDOORINFORMATION_14 = format_FATOUTDOORINFORMATION_14.readFeatures(json_FATOUTDOORINFORMATION_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_FATOUTDOORINFORMATION_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FATOUTDOORINFORMATION_14.addFeatures(features_FATOUTDOORINFORMATION_14);
var lyr_FATOUTDOORINFORMATION_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FATOUTDOORINFORMATION_14, 
                style: style_FATOUTDOORINFORMATION_14,
                popuplayertitle: 'FAT OUTDOOR INFORMATION',
                interactive: true,
                title: '<img src="styles/legend/FATOUTDOORINFORMATION_14.png" /> FAT OUTDOOR INFORMATION'
            });
var format_CLOSUREINFORMATION_15 = new ol.format.GeoJSON();
var features_CLOSUREINFORMATION_15 = format_CLOSUREINFORMATION_15.readFeatures(json_CLOSUREINFORMATION_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_CLOSUREINFORMATION_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSUREINFORMATION_15.addFeatures(features_CLOSUREINFORMATION_15);
var lyr_CLOSUREINFORMATION_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSUREINFORMATION_15, 
                style: style_CLOSUREINFORMATION_15,
                popuplayertitle: 'CLOSURE INFORMATION',
                interactive: true,
                title: '<img src="styles/legend/CLOSUREINFORMATION_15.png" /> CLOSURE INFORMATION'
            });
var format_SDU_16 = new ol.format.GeoJSON();
var features_SDU_16 = format_SDU_16.readFeatures(json_SDU_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_SDU_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDU_16.addFeatures(features_SDU_16);
var lyr_SDU_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDU_16, 
                style: style_SDU_16,
                popuplayertitle: 'SDU',
                interactive: true,
                title: '<img src="styles/legend/SDU_16.png" /> SDU'
            });
var format_COMMERCIAL_17 = new ol.format.GeoJSON();
var features_COMMERCIAL_17 = format_COMMERCIAL_17.readFeatures(json_COMMERCIAL_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_COMMERCIAL_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMERCIAL_17.addFeatures(features_COMMERCIAL_17);
var lyr_COMMERCIAL_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMERCIAL_17, 
                style: style_COMMERCIAL_17,
                popuplayertitle: 'COMMERCIAL',
                interactive: true,
                title: '<img src="styles/legend/COMMERCIAL_17.png" /> COMMERCIAL'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FDMFIBRE12FO_1.setVisible(true);lyr_FDMFIBRE24FO_2.setVisible(true);lyr_FDMFIBRE48FO_3.setVisible(true);lyr_FDMFIBRE96FO_4.setVisible(true);lyr_FDMFIBRE144FO_5.setVisible(true);lyr_FDT_6.setVisible(true);lyr_FATOUTDOORS_7.setVisible(true);lyr_FATINDOORS_8.setVisible(true);lyr_FibreCable_9.setVisible(true);lyr_GPSONFATINFLUENCE_10.setVisible(true);lyr_GPSONSPLICECLOSURE_11.setVisible(true);lyr_Boundary_12.setVisible(true);lyr_POLES_13.setVisible(true);lyr_FATOUTDOORINFORMATION_14.setVisible(true);lyr_CLOSUREINFORMATION_15.setVisible(true);lyr_SDU_16.setVisible(true);lyr_COMMERCIAL_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FDMFIBRE12FO_1,lyr_FDMFIBRE24FO_2,lyr_FDMFIBRE48FO_3,lyr_FDMFIBRE96FO_4,lyr_FDMFIBRE144FO_5,lyr_FDT_6,lyr_FATOUTDOORS_7,lyr_FATINDOORS_8,lyr_FibreCable_9,lyr_GPSONFATINFLUENCE_10,lyr_GPSONSPLICECLOSURE_11,lyr_Boundary_12,lyr_POLES_13,lyr_FATOUTDOORINFORMATION_14,lyr_CLOSUREINFORMATION_15,lyr_SDU_16,lyr_COMMERCIAL_17];
lyr_FDMFIBRE12FO_1.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FDMFIBRE24FO_2.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FDMFIBRE48FO_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FDMFIBRE96FO_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FDMFIBRE144FO_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FDT_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FATOUTDOORS_7.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'path': 'path', });
lyr_FATINDOORS_8.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', 'path': 'path', });
lyr_FibreCable_9.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_GPSONFATINFLUENCE_10.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_GPSONSPLICECLOSURE_11.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Boundary_12.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_POLES_13.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', });
lyr_FATOUTDOORINFORMATION_14.set('fieldAliases', {'BlkName': 'BlkName', 'HP': 'HP', 'ID': 'ID', 'FIBRES_CABL': 'FIBRES_CABL', 'FIBRES_FDT': 'FIBRES_FDT', 'POSITION_FD': 'POSITION_FD', 'BlkRotation': 'BlkRotation', 'BlkXscale': 'BlkXscale', 'BlkYscale': 'BlkYscale', 'BlkZscale': 'BlkZscale', 'SPL-1': 'SPL-1', 'SPL-2': 'SPL-2', });
lyr_CLOSUREINFORMATION_15.set('fieldAliases', {'DwgHandle': 'DwgHandle', 'DwgLayer': 'DwgLayer', 'DwgColor': 'DwgColor', 'DwgLinetype': 'DwgLinetype', 'DwgLineweig': 'DwgLineweig', 'DwgHyperlin': 'DwgHyperlin', 'DwgThicknes': 'DwgThicknes', 'DwgEntity': 'DwgEntity', 'BlkName': 'BlkName', 'ID': 'ID', });
lyr_SDU_16.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ADDRESS_NO_': 'ADDRESS_NO_', 'FLOORS': 'FLOORS', 'KML_FOLDER': 'KML_FOLDER', 'BUILDING_NA': 'BUILDING_NA', 'ROAD_NAME': 'ROAD_NAME', 'RESIDENTIAL': 'RESIDENTIAL', 'FRANCHISE': 'FRANCHISE', 'DROP': 'DROP', 'MAP_NUMBER': 'MAP_NUMBER', 'APARTMENTS': 'APARTMENTS', 'FAT': 'FAT', 'CITY': 'CITY', 'AREA': 'AREA', 'BlkName': 'BlkName', 'NAME': 'NAME', 'RESIDENTIA1': 'RESIDENTIA1', 'NO.FLOORS': 'NO.FLOORS', 'ROAD_NAME2': 'ROAD_NAME2', 'ADDRESS': 'ADDRESS', 'APARTMENTS2': 'APARTMENTS2', 'NODE': 'NODE', 'DROP2': 'DROP2', 'FRANCHISE2': 'FRANCHISE2', 'CITY2': 'CITY2', 'AREA2': 'AREA2', 'MAP_NUMBER2': 'MAP_NUMBER2', });
lyr_COMMERCIAL_17.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ADDRESS_NO_': 'ADDRESS_NO_', 'FLOORS': 'FLOORS', 'KML_FOLDER': 'KML_FOLDER', 'BUILDING_NA': 'BUILDING_NA', 'ROAD_NAME': 'ROAD_NAME', 'RESIDENTIAL': 'RESIDENTIAL', 'FRANCHISE': 'FRANCHISE', 'DROP': 'DROP', 'MAP_NUMBER': 'MAP_NUMBER', 'APARTMENTS': 'APARTMENTS', 'FAT': 'FAT', 'CITY': 'CITY', 'AREA': 'AREA', 'BlkName': 'BlkName', 'NAME': 'NAME', 'RESIDENTIA1': 'RESIDENTIA1', 'NO.FLOORS': 'NO.FLOORS', 'ROAD_NAME2': 'ROAD_NAME2', 'ADDRESS': 'ADDRESS', 'APARTMENTS2': 'APARTMENTS2', 'NODE': 'NODE', 'DROP2': 'DROP2', 'FRANCHISE2': 'FRANCHISE2', 'CITY2': 'CITY2', 'AREA2': 'AREA2', 'MAP_NUMBER2': 'MAP_NUMBER2', });
lyr_FDMFIBRE12FO_1.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FDMFIBRE24FO_2.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FDMFIBRE48FO_3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FDMFIBRE96FO_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FDMFIBRE144FO_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FDT_6.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FATOUTDOORS_7.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_FATINDOORS_8.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'width': 'TextEdit', 'path': 'TextEdit', });
lyr_FibreCable_9.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_GPSONFATINFLUENCE_10.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_GPSONSPLICECLOSURE_11.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Boundary_12.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_POLES_13.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_FATOUTDOORINFORMATION_14.set('fieldImages', {'BlkName': 'TextEdit', 'HP': 'TextEdit', 'ID': 'TextEdit', 'FIBRES_CABL': 'TextEdit', 'FIBRES_FDT': 'TextEdit', 'POSITION_FD': 'TextEdit', 'BlkRotation': 'TextEdit', 'BlkXscale': 'TextEdit', 'BlkYscale': 'TextEdit', 'BlkZscale': 'TextEdit', 'SPL-1': 'TextEdit', 'SPL-2': 'TextEdit', });
lyr_CLOSUREINFORMATION_15.set('fieldImages', {'DwgHandle': 'TextEdit', 'DwgLayer': 'TextEdit', 'DwgColor': 'TextEdit', 'DwgLinetype': 'TextEdit', 'DwgLineweig': 'TextEdit', 'DwgHyperlin': 'TextEdit', 'DwgThicknes': 'TextEdit', 'DwgEntity': 'TextEdit', 'BlkName': 'TextEdit', 'ID': 'TextEdit', });
lyr_SDU_16.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ADDRESS_NO_': 'TextEdit', 'FLOORS': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'BUILDING_NA': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'RESIDENTIAL': 'TextEdit', 'FRANCHISE': 'TextEdit', 'DROP': 'TextEdit', 'MAP_NUMBER': 'TextEdit', 'APARTMENTS': 'TextEdit', 'FAT': 'TextEdit', 'CITY': 'TextEdit', 'AREA': 'TextEdit', 'BlkName': 'TextEdit', 'NAME': 'TextEdit', 'RESIDENTIA1': 'TextEdit', 'NO.FLOORS': 'TextEdit', 'ROAD_NAME2': 'TextEdit', 'ADDRESS': 'TextEdit', 'APARTMENTS2': 'TextEdit', 'NODE': 'TextEdit', 'DROP2': 'TextEdit', 'FRANCHISE2': 'TextEdit', 'CITY2': 'TextEdit', 'AREA2': 'TextEdit', 'MAP_NUMBER2': 'TextEdit', });
lyr_COMMERCIAL_17.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ADDRESS_NO_': 'TextEdit', 'FLOORS': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'BUILDING_NA': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'RESIDENTIAL': 'TextEdit', 'FRANCHISE': 'TextEdit', 'DROP': 'TextEdit', 'MAP_NUMBER': 'TextEdit', 'APARTMENTS': 'TextEdit', 'FAT': 'TextEdit', 'CITY': 'TextEdit', 'AREA': 'TextEdit', 'BlkName': 'TextEdit', 'NAME': 'TextEdit', 'RESIDENTIA1': 'TextEdit', 'NO.FLOORS': 'TextEdit', 'ROAD_NAME2': 'TextEdit', 'ADDRESS': 'TextEdit', 'APARTMENTS2': 'TextEdit', 'NODE': 'TextEdit', 'DROP2': 'TextEdit', 'FRANCHISE2': 'TextEdit', 'CITY2': 'TextEdit', 'AREA2': 'TextEdit', 'MAP_NUMBER2': 'TextEdit', });
lyr_FDMFIBRE12FO_1.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FDMFIBRE24FO_2.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FDMFIBRE48FO_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FDMFIBRE96FO_4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FDMFIBRE144FO_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FDT_6.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FATOUTDOORS_7.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'path': 'no label', });
lyr_FATINDOORS_8.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', 'path': 'no label', });
lyr_FibreCable_9.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_GPSONFATINFLUENCE_10.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_GPSONSPLICECLOSURE_11.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Boundary_12.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_POLES_13.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_FATOUTDOORINFORMATION_14.set('fieldLabels', {'BlkName': 'hidden field', 'HP': 'inline label - always visible', 'ID': 'inline label - always visible', 'FIBRES_CABL': 'inline label - always visible', 'FIBRES_FDT': 'inline label - always visible', 'POSITION_FD': 'inline label - always visible', 'BlkRotation': 'hidden field', 'BlkXscale': 'hidden field', 'BlkYscale': 'hidden field', 'BlkZscale': 'hidden field', 'SPL-1': 'inline label - always visible', 'SPL-2': 'inline label - always visible', });
lyr_CLOSUREINFORMATION_15.set('fieldLabels', {'DwgHandle': 'hidden field', 'DwgLayer': 'hidden field', 'DwgColor': 'hidden field', 'DwgLinetype': 'hidden field', 'DwgLineweig': 'hidden field', 'DwgHyperlin': 'hidden field', 'DwgThicknes': 'hidden field', 'DwgEntity': 'hidden field', 'BlkName': 'hidden field', 'ID': 'inline label - always visible', });
lyr_SDU_16.set('fieldLabels', {'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'ADDRESS_NO_': 'inline label - always visible', 'FLOORS': 'inline label - always visible', 'KML_FOLDER': 'hidden field', 'BUILDING_NA': 'inline label - always visible', 'ROAD_NAME': 'inline label - always visible', 'RESIDENTIAL': 'inline label - always visible', 'FRANCHISE': 'inline label - always visible', 'DROP': 'inline label - always visible', 'MAP_NUMBER': 'inline label - always visible', 'APARTMENTS': 'inline label - always visible', 'FAT': 'inline label - always visible', 'CITY': 'inline label - always visible', 'AREA': 'inline label - always visible', 'BlkName': 'hidden field', 'NAME': 'hidden field', 'RESIDENTIA1': 'hidden field', 'NO.FLOORS': 'hidden field', 'ROAD_NAME2': 'hidden field', 'ADDRESS': 'hidden field', 'APARTMENTS2': 'hidden field', 'NODE': 'hidden field', 'DROP2': 'hidden field', 'FRANCHISE2': 'hidden field', 'CITY2': 'hidden field', 'AREA2': 'hidden field', 'MAP_NUMBER2': 'hidden field', });
lyr_COMMERCIAL_17.set('fieldLabels', {'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'ADDRESS_NO_': 'inline label - always visible', 'FLOORS': 'inline label - always visible', 'KML_FOLDER': 'hidden field', 'BUILDING_NA': 'inline label - always visible', 'ROAD_NAME': 'inline label - always visible', 'RESIDENTIAL': 'inline label - always visible', 'FRANCHISE': 'inline label - always visible', 'DROP': 'inline label - always visible', 'MAP_NUMBER': 'inline label - always visible', 'APARTMENTS': 'inline label - always visible', 'FAT': 'inline label - always visible', 'CITY': 'inline label - always visible', 'AREA': 'inline label - always visible', 'BlkName': 'hidden field', 'NAME': 'hidden field', 'RESIDENTIA1': 'hidden field', 'NO.FLOORS': 'hidden field', 'ROAD_NAME2': 'hidden field', 'ADDRESS': 'hidden field', 'APARTMENTS2': 'hidden field', 'NODE': 'hidden field', 'DROP2': 'hidden field', 'FRANCHISE2': 'hidden field', 'CITY2': 'hidden field', 'AREA2': 'hidden field', 'MAP_NUMBER2': 'hidden field', });
lyr_COMMERCIAL_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});