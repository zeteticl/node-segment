"use strict";
/**
 * Created by user on 2017/8/13/013.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.project_root = path.join(__dirname);
exports.dict_root = path.join(exports.project_root, 'dicts');
//export const dist_root = path.join(project_root, 'dist');
exports.temp_root = path.join(exports.project_root, 'test/temp');
const self = require("./project.config");
exports.default = self;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsNkJBQTZCO0FBRWhCLFFBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFcEMsUUFBQSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTFELDJEQUEyRDtBQUM5QyxRQUFBLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFOUQseUNBQXlDO0FBQ3pDLGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvOC8xMy8wMTMuXG4gKi9cblxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3Rfcm9vdCA9IHBhdGguam9pbihfX2Rpcm5hbWUpO1xuXG5leHBvcnQgY29uc3QgZGljdF9yb290ID0gcGF0aC5qb2luKHByb2plY3Rfcm9vdCwgJ2RpY3RzJyk7XG5cbi8vZXhwb3J0IGNvbnN0IGRpc3Rfcm9vdCA9IHBhdGguam9pbihwcm9qZWN0X3Jvb3QsICdkaXN0Jyk7XG5leHBvcnQgY29uc3QgdGVtcF9yb290ID0gcGF0aC5qb2luKHByb2plY3Rfcm9vdCwgJ3Rlc3QvdGVtcCcpO1xuXG5pbXBvcnQgKiBhcyBzZWxmIGZyb20gJy4vcHJvamVjdC5jb25maWcnO1xuZXhwb3J0IGRlZmF1bHQgc2VsZjtcbiJdfQ==