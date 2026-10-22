/**
 * VerifiRent MVP — Core Datasets
 * Human-verified ground audits, utility telemetry, and benchmark intelligence
 */

const VERIFIRENT_DATA = {
  neighbourhoods: {
    ikeja: {
      id: "ikeja",
      name: "Ikeja",
      subArea: "GRA & Allen Corridor",
      state: "Lagos State",
      score: 82,
      ratingLabel: "High Livability",
      summary: "Ikeja offers strong mobile connectivity and relatively good safety indicators. However, weekday commuting can be challenging during peak hours. Electricity reliability is moderate, so you may want to ask about backup power before moving in.",
      dataFreshness: "Updated 4 days ago",
      confidence: "High",
      verifiedReportsCount: 42,
      factors: [
        {
          id: "electricity",
          name: "Electricity Reliability",
          shortName: "Electricity",
          score: 78,
          status: "Moderate to High",
          detail: "Average 16–18 hrs/day grid availability. Dedicated feeders in GRA; Allen has periodic load sharing.",
          icon: "zap"
        },
        {
          id: "network",
          name: "Mobile Network Quality",
          shortName: "Network",
          score: 91,
          status: "Excellent",
          detail: "Strong 5G & 4G reception across MTN, Airtel, and Glo. Minimal dead spots reported indoors.",
          icon: "wifi"
        },
        // {
        //   id: "safety",
        //   name: "Safety & Security",
        //   shortName: "Safety",
        //   score: 83,
        //   status: "Good",
        //   detail: "Active residential estate security patrols, gated street gates, and reliable night illumination.",
        //   icon: "shield"
        // },
        // {
        //   id: "water",
        //   name: "Water Reliability",
        //   shortName: "Water",
        //   score: 74,
        //   status: "Moderate",
        //   detail: "Predominantly deep private boreholes. Water treatment filtration standard in most serviced complexes.",
        //   icon: "droplets"
        // },
        {
          id: "flood",
          name: "Flood Risk Assessment",
          shortName: "Flood Risk",
          score: 88,
          displayValue: "Low",
          status: "Low Risk",
          detail: "Naturally elevated terrain with cleared stormwater canals along major avenues.",
          icon: "triangle-alert"
        },
        {
          id: "traffic",
          name: "Commute & Traffic Flow",
          shortName: "Traffic",
          score: 68,
          status: "Challenging Peaks",
          detail: "Congestion on Mobolaji Bank Anthony & Kudirat Abiola Way during 7:30–9:30 AM and 5:00–8:00 PM.",
          icon: "car"
        }
      ],
      strengths: [
        "Strong mobile coverage and fast 5G data across major carriers",
        "High street security presence with gated estate barriers",
        "Immediate access to state hospital, retail hubs, and airport link"
      ],
      watchouts: [
        "Peak-hour bottleneck along Mobolaji Bank Anthony Way",
        "Moderate electricity fluctuations; confirm inverter/backup power setup"
      ]
    },
    yaba: {
      id: "yaba",
      name: "Yaba",
      subArea: "Alagomeji & Tejuosho",
      state: "Lagos State",
      score: 77,
      ratingLabel: "Balanced Livability",
      summary: "Yaba provides rapid transit access to both the Island and Mainland with solid borehole water systems. While tech connectivity is dependable, certain low-lying streets experience water retention after downpours.",
      dataFreshness: "Updated 2 days ago",
      confidence: "High",
      verifiedReportsCount: 38,
      factors: [
        {
          id: "electricity",
          name: "Electricity Reliability",
          shortName: "Electricity",
          score: 71,
          status: "Moderate",
          detail: "Average 14–16 hrs/day grid power. Commercial zone priority during business daytime.",
          icon: "zap"
        },
        {
          id: "network",
          name: "Mobile Network Quality",
          shortName: "Network",
          score: 88,
          status: "Very Good",
          detail: "Excellent fiber rollout in tech corridor with robust 4G/5G mobile data coverage.",
          icon: "wifi"
        },
        {
          id: "safety",
          name: "Safety & Security",
          shortName: "Safety",
          score: 79,
          status: "Moderate to Good",
          detail: "Safe residential streets; higher vigilance recommended around transit interchanges after dark.",
          icon: "shield"
        },
        {
          id: "water",
          name: "Water Reliability",
          shortName: "Water",
          score: 81,
          status: "Good",
          detail: "Clean underground aquifer with steady borehole yield and private treatment tanks.",
          icon: "droplets"
        },
        {
          id: "flood",
          name: "Flood Risk Assessment",
          shortName: "Flood Risk",
          score: 70,
          displayValue: "Moderate",
          status: "Moderate Risk",
          detail: "Surface accumulation during severe rain along specific interior access streets; clears in 2–3 hours.",
          icon: "triangle-alert"
        },
        {
          id: "traffic",
          name: "Commute & Traffic Flow",
          shortName: "Traffic",
          score: 73,
          status: "Moderate",
          detail: "Central mainland position allows quick Third Mainland Bridge access, though Yaba bus stop is busy.",
          icon: "car"
        }
      ],
      strengths: [
        "Strategic central transit point for Island or Mainland commuters",
        "Solid borehole water quality and dependable water pressure",
        "Walkable tech and commercial clusters with fast fiber internet"
      ],
      watchouts: [
        "Street water pooling along secondary unpaved side streets in rainy season",
        "High ambient market noise near commercial avenues"
      ]
    },
    lekki1: {
      id: "lekki1",
      name: "Lekki Phase 1",
      subArea: "Admiralty & Freedom Way",
      state: "Lagos State",
      score: 80,
      ratingLabel: "High Livability",
      summary: "Lekki Phase 1 excels in security protocols and private estate power infrastructure. Commuters must account for Admiralty Way bottlenecks, and prospective tenants should verify their building’s internal water filtration unit.",
      dataFreshness: "Updated 3 days ago",
      confidence: "High",
      verifiedReportsCount: 51,
      factors: [
        {
          id: "electricity",
          name: "Electricity Reliability",
          shortName: "Electricity",
          score: 84,
          status: "High (Estate Serviced)",
          detail: "Estate transformers supported by central generator schedules (18–24 hrs combined power).",
          icon: "zap"
        },
        {
          id: "network",
          name: "Mobile Network Quality",
          shortName: "Network",
          score: 86,
          status: "Very Good",
          detail: "Consistent coverage across primary carriers; slight degradation in multi-story basements.",
          icon: "wifi"
        },
        {
          id: "safety",
          name: "Safety & Security",
          shortName: "Safety",
          score: 85,
          status: "Very Good",
          detail: "Strict estate gate entry passes, private uniform security, and neighborhood watch response.",
          icon: "shield"
        },
        {
          id: "water",
          name: "Water Reliability",
          shortName: "Water",
          score: 68,
          status: "Moderate",
          detail: "Groundwater is saline/heavy; reverse osmosis or multi-stage filtration system strictly necessary.",
          icon: "droplets"
        },
        {
          id: "flood",
          name: "Flood Risk Assessment",
          shortName: "Flood Risk",
          score: 66,
          displayValue: "Moderate",
          status: "Moderate Risk",
          detail: "Coastal proximity; primary roads have deep drains, but secondary roads can hold water during downpours.",
          icon: "triangle-alert"
        },
        {
          id: "traffic",
          name: "Commute & Traffic Flow",
          shortName: "Traffic",
          score: 62,
          status: "Heavy Peaks",
          detail: "Lekki-Epe expressway and toll roundabout experience delays during peak morning exit.",
          icon: "car"
        }
      ],
      strengths: [
        "Uniformed 24/7 gate security and strict residential protocols",
        "Modern housing stock with reliable backup generator integration",
        "High dining, gym, and lifestyle convenience density"
      ],
      watchouts: [
        "Requires verified water filtration (check iron & salinity indicators)",
        "Substantial morning commute delay approaching the toll gate"
      ]
    }
  },

  comparisonFactors: [
    {
      factor: "Electricity Reliability",
      ikeja: 78,
      yaba: 71,
      lekki1: 84,
      unit: "/100",
      description: "Grid supply + estate substation feeder reliability"
    },
    {
      factor: "Mobile Network Quality",
      ikeja: 91,
      yaba: 88,
      lekki1: 86,
      unit: "/100",
      description: "Aggregated cellular throughput and call stability"
    },
    {
      factor: "Safety & Security",
      ikeja: 83,
      yaba: 79,
      lekki1: 85,
      unit: "/100",
      description: "Neighborhood access control and verified security presence"
    },
    {
      factor: "Water Reliability",
      ikeja: 74,
      yaba: 81,
      lekki1: 68,
      unit: "/100",
      description: "Aquifer purity and daily pressure consistency"
    },
    {
      factor: "Flood Risk (Safety Margin)",
      ikeja: 88,
      yaba: 70,
      lekki1: 66,
      unit: "Score",
      description: "Higher score indicates lower risk of street pooling"
    },
    {
      factor: "Commute & Traffic Ease",
      ikeja: 68,
      yaba: 73,
      lekki1: 62,
      unit: "/100",
      description: "Travel time predictability and road clearance index"
    }
  ],

  factorDefinitions: [
    {
      id: "electricity",
      title: "Electricity Reliability",
      description: "Daily hours of public grid power, feeder reliability, transformer load shedding, and voltage stability.",
      badge: "Verified Feeders",
      icon: "zap"
    },
    {
      id: "flood",
      title: "Flood Risk",
      description: "Topographical elevation, storm drain clearance, rain run-off speed, and seasonal street water retention.",
      badge: "Topographical Scans",
      icon: "triangle-alert"
    },
    {
      id: "network",
      title: "Mobile Network Quality",
      description: "Indoor and outdoor 4G/5G signal coverage across MTN, Airtel, and Glo, plus broadband fiber availability.",
      badge: "Carrier Audits",
      icon: "wifi"
    },
    {
      id: "water",
      title: "Water Reliability",
      description: "Borehole water quality, salinity index, seasonal water table depth, and municipal distribution status.",
      badge: "Water Testing",
      icon: "droplets"
    },
    {
      id: "safety",
      title: "Safety & Security",
      description: "Gated estate infrastructure, street lighting coverage, private security presence, and historical incident rates.",
      badge: "Ground Audits",
      icon: "shield"
    },
    {
      id: "traffic",
      title: "Commute & Traffic Flow",
      description: "Peak morning and evening bottlenecks, arterial road connectivity, and transit accessibility to key commercial nodes.",
      badge: "Flow Telemetry",
      icon: "car"
    }
  ]
};

if (typeof window !== "undefined") {
  window.VERIFIRENT_DATA = VERIFIRENT_DATA;
}
