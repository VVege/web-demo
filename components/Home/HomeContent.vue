<template>
    <el-row :gutter="18">
      <el-col
      v-for="item in db" :xs="10" :sm="10" :md="10" :key="item.time" :lg="8" :xl="8"
      >
        <el-card :style="{ 'padding': '0px', 'margin-bottom': '14px' }">
          <img
            :src="item.thumbnail"
            class="image"
          />
          <div style="padding: 14px">
            <span>{{item.title}}</span>
            <div class="bottom">
              <time class="time">{{ item.time }}</time>
              <el-button text class="button">Like</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import db from '../../data/db.json';
  import { DB, DBItem } from "../../data/DB";

  const writings = ref(db);

  </script>
  
  <style>
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    aspect-ratio: 1.0;
    object-fit: cover;
    width: 100%;
    display: block;
  }
  </style>
  