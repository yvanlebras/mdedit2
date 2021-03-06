import {
    assistant
} from './assistant/assistant.module';
import {
    home
} from './home/home.module';
import {
    mdViewMap
} from './md-view-map/md-view-map.module';
import {
    mdViewData
} from './md-view-data/md-view-data.module';
import {
    mdViewService
} from './md-view-service/md-view-service.module';
import {
    mdEditData
} from './md-edit-data/md-edit-data.module';
import {
    mdEditOpendata
} from './md-edit-opendata/md-edit-opendata.module';
import {
    mdEditData2
} from './md-edit-data2/md-edit-data2.module';
import {
    mdEditMap
} from './md-edit-map/md-edit-map.module';
import {
    mdTest
} from './md-test/md-test.module';
import {
    mdList
} from './md-list/md-list.module';
import {
    mdLive
} from './md-live/md-live.module';
import {
    mdEditNogeo
} from './md-edit-nogeo/md-edit-nogeo.module';

export const appViews = angular
    .module('app.views', [
        assistant,
        home,
        mdViewData,
        mdViewService,
        mdViewMap,
        mdEditData,
        mdEditOpendata,
        mdEditData2,
        mdEditMap,
        mdTest,
        mdList,
        mdLive,
        mdEditNogeo
    ])
    .name;