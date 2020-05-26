<template>
  <div>
    <div :id="elementId" :style="{ width, height }">
      <!-- daum kakao map -->
    </div>
  </div>
</template>

<script>
import Map from "../plugins/KakaoMap";

export default {
  data() {
    return {
      map: null,
      elementId: "map",
      markers: {
        type: Array,
        default() {
          return [];
        },
        required: true
      },
      width: "800px",
      height: "600px"
    };
  },
  watch: {
    markers: {
      handler() {
        if (typeof window === "undefined") return; // SSR
        this.initMap(this.markers);
      },
      immediate: true
    }
  },
  methods: {
    async initMap() {
      if (!this.map) {
        const map = new Map();
        await map.mount(this.elementId);

        map.addMarkerClusters([
          {
            key: "cluster1",
            color: "#222529",
            zIndex: 0,
            singleIconURL: null
          },
          {
            key: "cluster2",
            color: "#209cee",
            zIndex: 1,
            singleIconURL: null
          }
        ]);

        this.map = map;
      } else {
        this.map.clearMarkers();
      }

      const markers = [{ location: { lat: 33.450701, lng: 126.570667 } }];

      this.setCenter(33.450701, 126.570667, 3);

      this.map.addMarkers(
        markers.map(marker => {
          const {
            name,
            type,
            location: { lat, lng }
          } = marker;
          return {
            lat,
            lng,
            clusterKey: type,
            title: name,
            onClick: () => {
              this.$emit("click-marker", marker);
            }
          };
        })
      );
    },
    setCenter(lat, lng, level) {
      this.map && this.map.setCenter({ lat, lng, maxLevel: level });
    }
  }
};
</script>
