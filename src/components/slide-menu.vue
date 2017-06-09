<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Basic</template>
          <el-menu-item-group>
            <template slot="title">
              <router-link to="/basic">basic</router-link>
            </template>
            <el-menu-item index="1-1">
              <router-link to="/basic/layout">layout</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>data</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>form</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>navigation</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>notice</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>others</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
</script>

<style>
</style>
