import heroCorporateFacilityImg from './images/hero_corporate_facility_1792504461500.jpg';
import communicationsHardwareImg from './images/communications_hardware_1792504461393.jpg';
import logisticsDistributionHubImg from './images/logistics_distribution_hub_1792504462659.jpg';
import facilityInteriorFinishingImg from './images/facility_interior_finishing_1792504462310.jpg';
import civicCommunityBuildingImg from './images/civic_community_building_1792504463511.jpg';
import heroBackgroundVideoMp4 from './videos/hero_background.mp4';

/**
 * Centralized ES Module media manifest.
 * Importing all visual and video assets here ensures Vite bundles, hashes,
 * and emits every file into `dist/assets/` during `npm run build` so they
 * work reliably on any static or cloud hosting provider.
 */
export const MEDIA_ASSETS = {
  images: {
    heroCorporateFacility: heroCorporateFacilityImg,
    communicationsHardware: communicationsHardwareImg,
    logisticsDistributionHub: logisticsDistributionHubImg,
    facilityInteriorFinishing: facilityInteriorFinishingImg,
    civicCommunityBuilding: civicCommunityBuildingImg,
  },
  videos: {
    heroBackground: heroBackgroundVideoMp4,
  },
} as const;
