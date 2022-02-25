var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointSpring' )
  var i713 = data
  i712.spring = i713[0]
  i712.damper = i713[1]
  i712.targetPosition = i713[2]
  return i712
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointMotor' )
  var i715 = data
  i714.m_TargetVelocity = i715[0]
  i714.m_Force = i715[1]
  i714.m_FreeSpin = i715[2]
  return i714
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointLimits' )
  var i717 = data
  i716.m_Min = i717[0]
  i716.m_Max = i717[1]
  i716.m_Bounciness = i717[2]
  i716.m_BounceMinVelocity = i717[3]
  i716.m_ContactDistance = i717[4]
  i716.minBounce = i717[5]
  i716.maxBounce = i717[6]
  return i716
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointDrive' )
  var i719 = data
  i718.m_PositionSpring = i719[0]
  i718.m_PositionDamper = i719[1]
  i718.m_MaximumForce = i719[2]
  return i718
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i721 = data
  i720.m_Spring = i721[0]
  i720.m_Damper = i721[1]
  return i720
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i723 = data
  i722.m_Limit = i723[0]
  i722.m_Bounciness = i723[1]
  i722.m_ContactDistance = i723[2]
  return i722
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i725 = data
  i724.m_ExtremumSlip = i725[0]
  i724.m_ExtremumValue = i725[1]
  i724.m_AsymptoteSlip = i725[2]
  i724.m_AsymptoteValue = i725[3]
  i724.m_Stiffness = i725[4]
  return i724
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i727 = data
  i726.m_LowerAngle = i727[0]
  i726.m_UpperAngle = i727[1]
  return i726
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i729 = data
  i728.m_MotorSpeed = i729[0]
  i728.m_MaximumMotorTorque = i729[1]
  return i728
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i731 = data
  i730.m_DampingRatio = i731[0]
  i730.m_Frequency = i731[1]
  i730.m_Angle = i731[2]
  return i730
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i733 = data
  i732.m_LowerTranslation = i733[0]
  i732.m_UpperTranslation = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i734 = root || new pc.UnityMaterial()
  var i735 = data
  i734.name = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'shader')
  i734.renderQueue = i735[3]
  i734.enableInstancing = !!i735[4]
  var i737 = i735[5]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i737[i + 0]) );
  }
  i734.floatParameters = i736
  var i739 = i735[6]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i739[i + 0]) );
  }
  i734.colorParameters = i738
  var i741 = i735[7]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i741[i + 0]) );
  }
  i734.vectorParameters = i740
  var i743 = i735[8]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i743[i + 0]) );
  }
  i734.textureParameters = i742
  var i745 = i735[9]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i745[i + 0]) );
  }
  i734.materialFlags = i744
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i749 = data
  i748.name = i749[0]
  i748.value = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = new pc.Color(i753[1], i753[2], i753[3], i753[4])
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i757 = data
  i756.name = i757[0]
  i756.value = new pc.Vec4( i757[1], i757[2], i757[3], i757[4] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i761 = data
  i760.name = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'value')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i765 = data
  i764.name = i765[0]
  i764.enabled = !!i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i767 = data
  i766.position = new pc.Vec3( i767[0], i767[1], i767[2] )
  i766.scale = new pc.Vec3( i767[3], i767[4], i767[5] )
  i766.rotation = new pc.Quat(i767[6], i767[7], i767[8], i767[9])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'clip')
  i768.playOnAwake = !!i769[2]
  i768.loop = !!i769[3]
  i768.time = i769[4]
  i768.volume = i769[5]
  i768.pitch = i769[6]
  i768.enabled = !!i769[7]
  return i768
}

Deserializers["ThirdParties.Truongtv.SoundManager.Sfx"] = function (request, data, root) {
  var i770 = root || request.c( 'ThirdParties.Truongtv.SoundManager.Sfx' )
  var i771 = data
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i773 = data
  i772.name = i773[0]
  i772.tag = i773[1]
  i772.enabled = !!i773[2]
  i772.isStatic = !!i773[3]
  i772.layer = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i775 = data
  i774.name = i775[0]
  i774.width = i775[1]
  i774.height = i775[2]
  i774.mipmapCount = i775[3]
  i774.anisoLevel = i775[4]
  i774.filterMode = i775[5]
  i774.hdr = !!i775[6]
  i774.format = i775[7]
  i774.wrapMode = i775[8]
  i774.alphaIsTransparency = !!i775[9]
  i774.alphaSource = i775[10]
  return i774
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i776 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.atlasAssets = i778
  i776.scale = i777[1]
  request.r(i777[2], i777[3], 0, i776, 'skeletonJSON')
  i776.isUpgradingBlendModeMaterials = !!i777[4]
  i776.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i777[5], i776.blendModeMaterials)
  var i781 = i777[6]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i776.skeletonDataModifiers = i780
  var i783 = i777[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i776.fromAnimation = i782
  var i785 = i777[8]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i776.toAnimation = i784
  i776.duration = i777[9]
  i776.defaultMix = i777[10]
  request.r(i777[11], i777[12], 0, i776, 'controller')
  return i776
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i788 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i789 = data
  i788.applyAdditiveMaterial = !!i789[0]
  var i791 = i789[1]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i791[i + 0]));
  }
  i788.additiveMaterials = i790
  var i793 = i789[2]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i793[i + 0]));
  }
  i788.multiplyMaterials = i792
  var i795 = i789[3]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i795[i + 0]));
  }
  i788.screenMaterials = i794
  i788.requiresBlendModeMaterials = !!i789[4]
  return i788
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i798 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i799 = data
  i798.pageName = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'material')
  return i798
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i804 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'atlasFile')
  var i807 = i805[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.materials = i806
  return i804
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i811 = data
  i810.hashCode = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'material')
  i810.materialHashCode = i811[3]
  request.r(i811[4], i811[5], 0, i810, 'atlas')
  i810.normalStyle = i811[6]
  i810.normalSpacingOffset = i811[7]
  i810.boldStyle = i811[8]
  i810.boldSpacing = i811[9]
  i810.italicStyle = i811[10]
  i810.tabSize = i811[11]
  i810.m_Version = i811[12]
  i810.m_SourceFontFileGUID = i811[13]
  request.r(i811[14], i811[15], 0, i810, 'm_SourceFontFile_EditorRef')
  request.r(i811[16], i811[17], 0, i810, 'm_SourceFontFile')
  i810.m_AtlasPopulationMode = i811[18]
  i810.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i811[19], i810.m_FaceInfo)
  var i813 = i811[20]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.TextCore.Glyph', i813[i + 0]));
  }
  i810.m_GlyphTable = i812
  var i815 = i811[21]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.TMP_Character', i815[i + 0]));
  }
  i810.m_CharacterTable = i814
  var i817 = i811[22]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i810.m_AtlasTextures = i816
  i810.m_AtlasTextureIndex = i811[23]
  i810.m_IsMultiAtlasTexturesEnabled = !!i811[24]
  var i819 = i811[25]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('UnityEngine.TextCore.GlyphRect', i819[i + 0]));
  }
  i810.m_UsedGlyphRects = i818
  var i821 = i811[26]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('UnityEngine.TextCore.GlyphRect', i821[i + 0]));
  }
  i810.m_FreeGlyphRects = i820
  i810.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i811[27], i810.m_fontInfo)
  i810.m_AtlasWidth = i811[28]
  i810.m_AtlasHeight = i811[29]
  i810.m_AtlasPadding = i811[30]
  i810.m_AtlasRenderMode = i811[31]
  var i823 = i811[32]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('TMPro.TMP_Glyph', i823[i + 0]));
  }
  i810.m_glyphInfoList = i822
  i810.m_KerningTable = request.d('TMPro.KerningTable', i811[33], i810.m_KerningTable)
  i810.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i811[34], i810.m_FontFeatureTable)
  var i825 = i811[35]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 1, i824, '')
  }
  i810.fallbackFontAssets = i824
  var i827 = i811[36]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i810.m_FallbackFontAssetTable = i826
  i810.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i811[37], i810.m_CreationSettings)
  var i829 = i811[38]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('TMPro.TMP_FontWeightPair', i829[i + 0]) );
  }
  i810.m_FontWeightTable = i828
  var i831 = i811[39]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('TMPro.TMP_FontWeightPair', i831[i + 0]) );
  }
  i810.fontWeights = i830
  return i810
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i833 = data
  i832.m_FaceIndex = i833[0]
  i832.m_FamilyName = i833[1]
  i832.m_StyleName = i833[2]
  i832.m_PointSize = i833[3]
  i832.m_Scale = i833[4]
  i832.m_LineHeight = i833[5]
  i832.m_AscentLine = i833[6]
  i832.m_CapLine = i833[7]
  i832.m_MeanLine = i833[8]
  i832.m_Baseline = i833[9]
  i832.m_DescentLine = i833[10]
  i832.m_SuperscriptOffset = i833[11]
  i832.m_SuperscriptSize = i833[12]
  i832.m_SubscriptOffset = i833[13]
  i832.m_SubscriptSize = i833[14]
  i832.m_UnderlineOffset = i833[15]
  i832.m_UnderlineThickness = i833[16]
  i832.m_StrikethroughOffset = i833[17]
  i832.m_StrikethroughThickness = i833[18]
  i832.m_TabWidth = i833[19]
  return i832
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i837 = data
  i836.m_Index = i837[0]
  i836.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i837[1], i836.m_Metrics)
  i836.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i837[2], i836.m_GlyphRect)
  i836.m_Scale = i837[3]
  i836.m_AtlasIndex = i837[4]
  return i836
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i839 = data
  i838.m_Width = i839[0]
  i838.m_Height = i839[1]
  i838.m_HorizontalBearingX = i839[2]
  i838.m_HorizontalBearingY = i839[3]
  i838.m_HorizontalAdvance = i839[4]
  return i838
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i841 = data
  i840.m_X = i841[0]
  i840.m_Y = i841[1]
  i840.m_Width = i841[2]
  i840.m_Height = i841[3]
  return i840
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_Character' )
  var i845 = data
  i844.m_ElementType = i845[0]
  i844.m_Unicode = i845[1]
  i844.m_GlyphIndex = i845[2]
  i844.m_Scale = i845[3]
  return i844
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i851 = data
  i850.Name = i851[0]
  i850.PointSize = i851[1]
  i850.Scale = i851[2]
  i850.CharacterCount = i851[3]
  i850.LineHeight = i851[4]
  i850.Baseline = i851[5]
  i850.Ascender = i851[6]
  i850.CapHeight = i851[7]
  i850.Descender = i851[8]
  i850.CenterLine = i851[9]
  i850.SuperscriptOffset = i851[10]
  i850.SubscriptOffset = i851[11]
  i850.SubSize = i851[12]
  i850.Underline = i851[13]
  i850.UnderlineThickness = i851[14]
  i850.strikethrough = i851[15]
  i850.strikethroughThickness = i851[16]
  i850.TabWidth = i851[17]
  i850.Padding = i851[18]
  i850.AtlasWidth = i851[19]
  i850.AtlasHeight = i851[20]
  return i850
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_Glyph' )
  var i855 = data
  i854.id = i855[0]
  i854.x = i855[1]
  i854.y = i855[2]
  i854.width = i855[3]
  i854.height = i855[4]
  i854.xOffset = i855[5]
  i854.yOffset = i855[6]
  i854.xAdvance = i855[7]
  i854.scale = i855[8]
  return i854
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.KerningTable' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.KerningPair', i859[i + 0]));
  }
  i856.kerningPairs = i858
  return i856
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.KerningPair' )
  var i863 = data
  i862.xOffset = i863[0]
  i862.m_FirstGlyph = i863[1]
  i862.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i863[2], i862.m_FirstGlyphAdjustments)
  i862.m_SecondGlyph = i863[3]
  i862.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i863[4], i862.m_SecondGlyphAdjustments)
  i862.m_IgnoreSpacingAdjustments = !!i863[5]
  return i862
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i867[i + 0]));
  }
  i864.m_GlyphPairAdjustmentRecords = i866
  return i864
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i871 = data
  i870.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i871[0], i870.m_FirstAdjustmentRecord)
  i870.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i871[1], i870.m_SecondAdjustmentRecord)
  i870.m_FeatureLookupFlags = i871[2]
  return i870
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i873 = data
  i872.m_GlyphIndex = i873[0]
  i872.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i873[1], i872.m_GlyphValueRecord)
  return i872
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i875 = data
  i874.m_XPlacement = i875[0]
  i874.m_YPlacement = i875[1]
  i874.m_XAdvance = i875[2]
  i874.m_YAdvance = i875[3]
  return i874
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i879 = data
  i878.sourceFontFileName = i879[0]
  i878.sourceFontFileGUID = i879[1]
  i878.pointSizeSamplingMode = i879[2]
  i878.pointSize = i879[3]
  i878.padding = i879[4]
  i878.packingMode = i879[5]
  i878.atlasWidth = i879[6]
  i878.atlasHeight = i879[7]
  i878.characterSetSelectionMode = i879[8]
  i878.characterSequence = i879[9]
  i878.referencedFontAssetGUID = i879[10]
  i878.referencedTextAssetGUID = i879[11]
  i878.fontStyle = i879[12]
  i878.fontStyleModifier = i879[13]
  i878.renderMode = i879[14]
  i878.includeFontFeatures = !!i879[15]
  return i878
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'regularTypeface')
  request.r(i883[2], i883[3], 0, i882, 'italicTypeface')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i885 = data
  i884.name = i885[0]
  i884.halfPrecision = !!i885[1]
  i884.vertexCount = i885[2]
  i884.aabb = i885[3]
  var i887 = i885[4]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( !!i887[i + 0] );
  }
  i884.streams = i886
  i884.vertices = i885[5]
  var i889 = i885[6]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i889[i + 0]) );
  }
  i884.subMeshes = i888
  var i891 = i885[7]
  var i890 = []
  for(var i = 0; i < i891.length; i += 16) {
    i890.push( new pc.Mat4().setData(i891[i + 0], i891[i + 1], i891[i + 2], i891[i + 3],  i891[i + 4], i891[i + 5], i891[i + 6], i891[i + 7],  i891[i + 8], i891[i + 9], i891[i + 10], i891[i + 11],  i891[i + 12], i891[i + 13], i891[i + 14], i891[i + 15]) );
  }
  i884.bindposes = i890
  var i893 = i885[8]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i893[i + 0]) );
  }
  i884.blendShapes = i892
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i899 = data
  i898.triangles = i899[0]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i905 = data
  i904.name = i905[0]
  var i907 = i905[1]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i907[i + 0]) );
  }
  i904.frames = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i909 = data
  i908.name = i909[0]
  i908.bounciness = i909[1]
  i908.friction = i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i911 = data
  i910.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i911[0], i910.main)
  i910.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i911[1], i910.colorBySpeed)
  i910.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i911[2], i910.colorOverLifetime)
  i910.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i911[3], i910.emission)
  i910.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i911[4], i910.rotationBySpeed)
  i910.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i911[5], i910.rotationOverLifetime)
  i910.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i911[6], i910.shape)
  i910.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i911[7], i910.sizeBySpeed)
  i910.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i911[8], i910.sizeOverLifetime)
  i910.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i911[9], i910.textureSheetAnimation)
  i910.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i911[10], i910.velocityOverLifetime)
  i910.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i911[11], i910.noise)
  i910.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i911[12], i910.inheritVelocity)
  i910.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i911[13], i910.forceOverLifetime)
  i910.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i911[14], i910.limitVelocityOverLifetime)
  i910.useAutoRandomSeed = !!i911[15]
  i910.randomSeed = i911[16]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemMain()
  var i913 = data
  i912.duration = i913[0]
  i912.loop = !!i913[1]
  i912.prewarm = !!i913[2]
  i912.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.startDelay)
  i912.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[4], i912.startLifetime)
  i912.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[5], i912.startSpeed)
  i912.startSize3D = !!i913[6]
  i912.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[7], i912.startSizeX)
  i912.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[8], i912.startSizeY)
  i912.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[9], i912.startSizeZ)
  i912.startRotation3D = !!i913[10]
  i912.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[11], i912.startRotationX)
  i912.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[12], i912.startRotationY)
  i912.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[13], i912.startRotationZ)
  i912.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i913[14], i912.startColor)
  i912.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[15], i912.gravityModifier)
  i912.simulationSpace = i913[16]
  request.r(i913[17], i913[18], 0, i912, 'customSimulationSpace')
  i912.simulationSpeed = i913[19]
  i912.useUnscaledTime = !!i913[20]
  i912.scalingMode = i913[21]
  i912.playOnAwake = !!i913[22]
  i912.maxParticles = i913[23]
  i912.emitterVelocityMode = i913[24]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i914 = root || new pc.MinMaxCurve()
  var i915 = data
  i914.mode = i915[0]
  i914.curveMin = new pc.AnimationCurve( { keys_flow: i915[1] } )
  i914.curveMax = new pc.AnimationCurve( { keys_flow: i915[2] } )
  i914.curveMultiplier = i915[3]
  i914.constantMin = i915[4]
  i914.constantMax = i915[5]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i916 = root || new pc.MinMaxGradient()
  var i917 = data
  i916.mode = i917[0]
  i916.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i917[1], i916.gradientMin)
  i916.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i917[2], i916.gradientMax)
  i916.colorMin = new pc.Color(i917[3], i917[4], i917[5], i917[6])
  i916.colorMax = new pc.Color(i917[7], i917[8], i917[9], i917[10])
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i919 = data
  i918.mode = i919[0]
  var i921 = i919[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i921[i + 0]) );
  }
  i918.colorKeys = i920
  var i923 = i919[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i923[i + 0]) );
  }
  i918.alphaKeys = i922
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemColorBySpeed()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i925[1], i924.color)
  i924.range = new pc.Vec2( i925[2], i925[3] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i929 = data
  i928.color = new pc.Color(i929[0], i929[1], i929[2], i929[3])
  i928.time = i929[4]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i933 = data
  i932.alpha = i933[0]
  i932.time = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemColorOverLifetime()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i935[1], i934.color)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemEmitter()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.rateOverTime)
  i936.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.rateOverDistance)
  var i939 = i937[3]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i939[i + 0]) );
  }
  i936.bursts = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemBurst()
  var i943 = data
  i942.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[0], i942.count)
  i942.cycleCount = i943[1]
  i942.minCount = i943[2]
  i942.maxCount = i943[3]
  i942.repeatInterval = i943[4]
  i942.time = i943[5]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemRotationBySpeed()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.x)
  i944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.y)
  i944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.z)
  i944.separateAxes = !!i945[4]
  i944.range = new pc.Vec2( i945[5], i945[6] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemRotationOverLifetime()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.x)
  i946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.y)
  i946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[3], i946.z)
  i946.separateAxes = !!i947[4]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemShape()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.shapeType = i949[1]
  i948.randomDirectionAmount = i949[2]
  i948.sphericalDirectionAmount = i949[3]
  i948.randomPositionAmount = i949[4]
  i948.alignToDirection = !!i949[5]
  i948.radius = i949[6]
  i948.radiusMode = i949[7]
  i948.radiusSpread = i949[8]
  i948.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[9], i948.radiusSpeed)
  i948.radiusThickness = i949[10]
  i948.angle = i949[11]
  i948.length = i949[12]
  i948.boxThickness = new pc.Vec3( i949[13], i949[14], i949[15] )
  i948.meshShapeType = i949[16]
  request.r(i949[17], i949[18], 0, i948, 'mesh')
  request.r(i949[19], i949[20], 0, i948, 'meshRenderer')
  request.r(i949[21], i949[22], 0, i948, 'skinnedMeshRenderer')
  i948.useMeshMaterialIndex = !!i949[23]
  i948.meshMaterialIndex = i949[24]
  i948.useMeshColors = !!i949[25]
  i948.normalOffset = i949[26]
  i948.arc = i949[27]
  i948.arcMode = i949[28]
  i948.arcSpread = i949[29]
  i948.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[30], i948.arcSpeed)
  i948.donutRadius = i949[31]
  i948.position = new pc.Vec3( i949[32], i949[33], i949[34] )
  i948.rotation = new pc.Vec3( i949[35], i949[36], i949[37] )
  i948.scale = new pc.Vec3( i949[38], i949[39], i949[40] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemSizeBySpeed()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.separateAxes = !!i951[4]
  i950.range = new pc.Vec2( i951[5], i951[6] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemSizeOverLifetime()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.x)
  i952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.y)
  i952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.z)
  i952.separateAxes = !!i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.mode = i955[1]
  i954.animation = i955[2]
  i954.numTilesX = i955[3]
  i954.numTilesY = i955[4]
  i954.useRandomRow = !!i955[5]
  i954.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[6], i954.frameOverTime)
  i954.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[7], i954.startFrame)
  i954.cycleCount = i955[8]
  i954.rowIndex = i955[9]
  i954.flipU = i955[10]
  i954.flipV = i955[11]
  i954.spriteCount = i955[12]
  var i957 = i955[13]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.sprites = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[1], i960.x)
  i960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.y)
  i960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.z)
  i960.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[4], i960.speedModifier)
  i960.space = i961[5]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemNoise()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.separateAxes = !!i963[1]
  i962.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.strengthX)
  i962.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.strengthY)
  i962.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[4], i962.strengthZ)
  i962.frequency = i963[5]
  i962.damping = !!i963[6]
  i962.octaveCount = i963[7]
  i962.octaveMultiplier = i963[8]
  i962.octaveScale = i963[9]
  i962.quality = i963[10]
  i962.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[11], i962.scrollSpeed)
  i962.scrollSpeedMultiplier = i963[12]
  i962.remapEnabled = !!i963[13]
  i962.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[14], i962.remapX)
  i962.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[15], i962.remapY)
  i962.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[16], i962.remapZ)
  i962.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[17], i962.positionAmount)
  i962.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[18], i962.rotationAmount)
  i962.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[19], i962.sizeAmount)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemInheritVelocity()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.mode = i965[1]
  i964.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.curve)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemForceOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.space = i967[4]
  i966.randomized = !!i967[5]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[1], i968.limitX)
  i968.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.limitY)
  i968.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.limitZ)
  i968.dampen = i969[4]
  i968.separateAxes = !!i969[5]
  i968.space = i969[6]
  i968.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[7], i968.drag)
  i968.multiplyDragByParticleSize = !!i969[8]
  i968.multiplyDragByParticleVelocity = !!i969[9]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i971 = data
  i970.enabled = !!i971[0]
  request.r(i971[1], i971[2], 0, i970, 'sharedMaterial')
  var i973 = i971[3]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i970.sharedMaterials = i972
  i970.receiveShadows = !!i971[4]
  i970.shadowCastingMode = i971[5]
  i970.sortingLayerID = i971[6]
  i970.sortingOrder = i971[7]
  i970.lightmapIndex = i971[8]
  i970.lightmapSceneIndex = i971[9]
  i970.lightmapScaleOffset = new pc.Vec4( i971[10], i971[11], i971[12], i971[13] )
  i970.lightProbeUsage = i971[14]
  i970.reflectionProbeUsage = i971[15]
  request.r(i971[16], i971[17], 0, i970, 'mesh')
  i970.meshCount = i971[18]
  i970.activeVertexStreamsCount = i971[19]
  i970.alignment = i971[20]
  i970.renderMode = i971[21]
  i970.sortMode = i971[22]
  i970.lengthScale = i971[23]
  i970.velocityScale = i971[24]
  i970.cameraVelocityScale = i971[25]
  i970.normalDirection = i971[26]
  i970.sortingFudge = i971[27]
  i970.minParticleSize = i971[28]
  i970.maxParticleSize = i971[29]
  i970.pivot = new pc.Vec3( i971[30], i971[31], i971[32] )
  request.r(i971[33], i971[34], 0, i970, 'trailMaterial')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i975 = data
  i974.pivot = new pc.Vec2( i975[0], i975[1] )
  i974.anchorMin = new pc.Vec2( i975[2], i975[3] )
  i974.anchorMax = new pc.Vec2( i975[4], i975[5] )
  i974.sizeDelta = new pc.Vec2( i975[6], i975[7] )
  i974.anchoredPosition3D = new pc.Vec3( i975[8], i975[9], i975[10] )
  i974.rotation = new pc.Quat(i975[11], i975[12], i975[13], i975[14])
  i974.scale = new pc.Vec3( i975[15], i975[16], i975[17] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.planeDistance = i977[1]
  i976.referencePixelsPerUnit = i977[2]
  i976.isFallbackOverlay = !!i977[3]
  i976.renderMode = i977[4]
  i976.renderOrder = i977[5]
  i976.sortingLayerName = i977[6]
  i976.sortingOrder = i977[7]
  i976.scaleFactor = i977[8]
  request.r(i977[9], i977[10], 0, i976, 'worldCamera')
  i976.overrideSorting = !!i977[11]
  i976.pixelPerfect = !!i977[12]
  i976.targetDisplay = i977[13]
  i976.overridePixelPerfect = !!i977[14]
  return i976
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i979 = data
  i978.m_UiScaleMode = i979[0]
  i978.m_ReferencePixelsPerUnit = i979[1]
  i978.m_ScaleFactor = i979[2]
  i978.m_ReferenceResolution = new pc.Vec2( i979[3], i979[4] )
  i978.m_ScreenMatchMode = i979[5]
  i978.m_MatchWidthOrHeight = i979[6]
  i978.m_PhysicalUnit = i979[7]
  i978.m_FallbackScreenDPI = i979[8]
  i978.m_DefaultSpriteDPI = i979[9]
  i978.m_DynamicPixelsPerUnit = i979[10]
  i978.m_PresetInfoIsWorld = !!i979[11]
  return i978
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i981 = data
  i980.m_IgnoreReversedGraphics = !!i981[0]
  i980.m_BlockingObjects = i981[1]
  i980.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i981[2] )
  return i980
}

Deserializers["Projects.Scripts.UIController.CoinValueText"] = function (request, data, root) {
  var i982 = root || request.c( 'Projects.Scripts.UIController.CoinValueText' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'coinValueText')
  i982.curve = new pc.AnimationCurve( { keys_flow: i983[2] } )
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i985 = data
  i984.cullTransparentMesh = !!i985[0]
  return i984
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i987 = data
  i986.m_hasFontAssetChanged = !!i987[0]
  request.r(i987[1], i987[2], 0, i986, 'm_baseMaterial')
  i986.m_maskOffset = new pc.Vec4( i987[3], i987[4], i987[5], i987[6] )
  i986.m_text = i987[7]
  i986.m_isRightToLeft = !!i987[8]
  request.r(i987[9], i987[10], 0, i986, 'm_fontAsset')
  request.r(i987[11], i987[12], 0, i986, 'm_sharedMaterial')
  var i989 = i987[13]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.m_fontSharedMaterials = i988
  request.r(i987[14], i987[15], 0, i986, 'm_fontMaterial')
  var i991 = i987[16]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i986.m_fontMaterials = i990
  i986.m_fontColor32 = UnityEngine.Color32.ConstructColor(i987[17], i987[18], i987[19], i987[20])
  i986.m_fontColor = new pc.Color(i987[21], i987[22], i987[23], i987[24])
  i986.m_enableVertexGradient = !!i987[25]
  i986.m_colorMode = i987[26]
  i986.m_fontColorGradient = request.d('TMPro.VertexGradient', i987[27], i986.m_fontColorGradient)
  request.r(i987[28], i987[29], 0, i986, 'm_fontColorGradientPreset')
  request.r(i987[30], i987[31], 0, i986, 'm_spriteAsset')
  i986.m_tintAllSprites = !!i987[32]
  request.r(i987[33], i987[34], 0, i986, 'm_StyleSheet')
  i986.m_TextStyleHashCode = i987[35]
  i986.m_overrideHtmlColors = !!i987[36]
  i986.m_faceColor = UnityEngine.Color32.ConstructColor(i987[37], i987[38], i987[39], i987[40])
  i986.m_fontSize = i987[41]
  i986.m_fontSizeBase = i987[42]
  i986.m_fontWeight = i987[43]
  i986.m_enableAutoSizing = !!i987[44]
  i986.m_fontSizeMin = i987[45]
  i986.m_fontSizeMax = i987[46]
  i986.m_fontStyle = i987[47]
  i986.m_HorizontalAlignment = i987[48]
  i986.m_VerticalAlignment = i987[49]
  i986.m_textAlignment = i987[50]
  i986.m_characterSpacing = i987[51]
  i986.m_wordSpacing = i987[52]
  i986.m_lineSpacing = i987[53]
  i986.m_lineSpacingMax = i987[54]
  i986.m_paragraphSpacing = i987[55]
  i986.m_charWidthMaxAdj = i987[56]
  i986.m_enableWordWrapping = !!i987[57]
  i986.m_wordWrappingRatios = i987[58]
  i986.m_overflowMode = i987[59]
  request.r(i987[60], i987[61], 0, i986, 'm_linkedTextComponent')
  request.r(i987[62], i987[63], 0, i986, 'parentLinkedComponent')
  i986.m_enableKerning = !!i987[64]
  i986.m_enableExtraPadding = !!i987[65]
  i986.checkPaddingRequired = !!i987[66]
  i986.m_isRichText = !!i987[67]
  i986.m_parseCtrlCharacters = !!i987[68]
  i986.m_isOrthographic = !!i987[69]
  i986.m_isCullingEnabled = !!i987[70]
  i986.m_horizontalMapping = i987[71]
  i986.m_verticalMapping = i987[72]
  i986.m_uvLineOffset = i987[73]
  i986.m_geometrySortingOrder = i987[74]
  i986.m_IsTextObjectScaleStatic = !!i987[75]
  i986.m_VertexBufferAutoSizeReduction = !!i987[76]
  i986.m_useMaxVisibleDescender = !!i987[77]
  i986.m_pageToDisplay = i987[78]
  i986.m_margin = new pc.Vec4( i987[79], i987[80], i987[81], i987[82] )
  i986.m_isUsingLegacyAnimationComponent = !!i987[83]
  i986.m_isVolumetricText = !!i987[84]
  request.r(i987[85], i987[86], 0, i986, 'm_Material')
  i986.m_Maskable = !!i987[87]
  i986.m_Color = new pc.Color(i987[88], i987[89], i987[90], i987[91])
  i986.m_RaycastTarget = !!i987[92]
  i986.m_RaycastPadding = new pc.Vec4( i987[93], i987[94], i987[95], i987[96] )
  return i986
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.VertexGradient' )
  var i993 = data
  i992.topLeft = new pc.Color(i993[0], i993[1], i993[2], i993[3])
  i992.topRight = new pc.Color(i993[4], i993[5], i993[6], i993[7])
  i992.bottomLeft = new pc.Color(i993[8], i993[9], i993[10], i993[11])
  i992.bottomRight = new pc.Color(i993[12], i993[13], i993[14], i993[15])
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i995 = data
  i994.name = i995[0]
  i994.atlasId = i995[1]
  i994.mipmapCount = i995[2]
  i994.hdr = !!i995[3]
  i994.size = i995[4]
  i994.anisoLevel = i995[5]
  i994.filterMode = i995[6]
  i994.wrapMode = i995[7]
  var i997 = i995[8]
  var i996 = []
  for(var i = 0; i < i997.length; i += 4) {
    i996.push( UnityEngine.Rect.MinMaxRect(i997[i + 0], i997[i + 1], i997[i + 2], i997[i + 3]) );
  }
  i994.rects = i996
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.index = i1001[1]
  i1000.startup = !!i1001[2]
  return i1000
}

Deserializers["ThirdParties.Truongtv.SoundManager.SoundManager"] = function (request, data, root) {
  var i1002 = root || request.c( 'ThirdParties.Truongtv.SoundManager.SoundManager' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'sfxPrefab')
  var i1005 = i1003[2]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('ThirdParties.Truongtv.SoundManager.Sfx')))
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 1, i1004, '')
  }
  i1002.sfxList = i1004
  request.r(i1003[3], i1003[4], 0, i1002, 'buttonSound')
  request.r(i1003[5], i1003[6], 0, i1002, 'popupOpenSound')
  request.r(i1003[7], i1003[8], 0, i1002, 'popupCloseSound')
  return i1002
}

Deserializers["Projects.Scripts.GamePlay.Sound.SoundInGameManager"] = function (request, data, root) {
  var i1008 = root || request.c( 'Projects.Scripts.GamePlay.Sound.SoundInGameManager' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'soundManager')
  request.r(i1009[2], i1009[3], 0, i1008, 'win')
  request.r(i1009[4], i1009[5], 0, i1008, 'lose')
  var i1011 = i1009[6]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.bgm = i1010
  var i1013 = i1009[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1008.bossFight = i1012
  request.r(i1009[8], i1009[9], 0, i1008, 'ballTrySkin')
  request.r(i1009[10], i1009[11], 0, i1008, 'ballLanding')
  request.r(i1009[12], i1009[13], 0, i1008, 'ballHurt')
  request.r(i1009[14], i1009[15], 0, i1008, 'ballAttack')
  request.r(i1009[16], i1009[17], 0, i1008, 'ballDie')
  request.r(i1009[18], i1009[19], 0, i1008, 'ballCollectCoin')
  request.r(i1009[20], i1009[21], 0, i1008, 'ballCollectStar')
  request.r(i1009[22], i1009[23], 0, i1008, 'ballCollectHeart')
  request.r(i1009[24], i1009[25], 0, i1008, 'ballCollectMagnet')
  request.r(i1009[26], i1009[27], 0, i1008, 'ballWin')
  request.r(i1009[28], i1009[29], 0, i1008, 'ballExplode')
  request.r(i1009[30], i1009[31], 0, i1008, 'ballInCheckPoint')
  request.r(i1009[32], i1009[33], 0, i1008, 'ballRevive')
  var i1015 = i1009[34]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1008.jumpClips = i1014
  request.r(i1009[35], i1009[36], 0, i1008, 'spring')
  request.r(i1009[37], i1009[38], 0, i1008, 'cageBreakSound')
  request.r(i1009[39], i1009[40], 0, i1008, 'ballRescueSound')
  return i1008
}

Deserializers["Projects.Scripts.UIController.GamePlayController"] = function (request, data, root) {
  var i1018 = root || request.c( 'Projects.Scripts.UIController.GamePlayController' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'ball')
  i1018.totalCoin = i1019[2]
  i1018.level = i1019[3]
  i1018.gameState = i1019[4]
  i1018.totalStars = i1019[5]
  request.r(i1019[6], i1019[7], 0, i1018, 'tapToContinue')
  request.r(i1019[8], i1019[9], 0, i1018, 'currentCheckPoint')
  request.r(i1019[10], i1019[11], 0, i1018, 'ballUI')
  request.r(i1019[12], i1019[13], 0, i1018, 'magnetIcon')
  i1018.magnetActive = !!i1019[14]
  request.r(i1019[15], i1019[16], 0, i1018, 'coinValuePrefab')
  var i1021 = i1019[17]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.starList = i1020
  i1018.currentHp = i1019[18]
  var i1023 = i1019[19]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1018.hpList = i1022
  request.r(i1019[20], i1019[21], 0, i1018, 'hpPrefabs')
  request.r(i1019[22], i1019[23], 0, i1018, 'lifeText')
  request.r(i1019[24], i1019[25], 0, i1018, 'lifeIcon')
  request.r(i1019[26], i1019[27], 0, i1018, 'pauseButton')
  request.r(i1019[28], i1019[29], 0, i1018, 'bossGroup')
  request.r(i1019[30], i1019[31], 0, i1018, 'bossHp')
  request.r(i1019[32], i1019[33], 0, i1018, 'bossWarning')
  request.r(i1019[34], i1019[35], 0, i1018, 'bossSkeleton')
  return i1018
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.Image' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'm_Sprite')
  i1028.m_Type = i1029[2]
  i1028.m_PreserveAspect = !!i1029[3]
  i1028.m_FillCenter = !!i1029[4]
  i1028.m_FillMethod = i1029[5]
  i1028.m_FillAmount = i1029[6]
  i1028.m_FillClockwise = !!i1029[7]
  i1028.m_FillOrigin = i1029[8]
  i1028.m_UseSpriteMesh = !!i1029[9]
  i1028.m_PixelsPerUnitMultiplier = i1029[10]
  request.r(i1029[11], i1029[12], 0, i1028, 'm_Material')
  i1028.m_Maskable = !!i1029[13]
  i1028.m_Color = new pc.Color(i1029[14], i1029[15], i1029[16], i1029[17])
  i1028.m_RaycastTarget = !!i1029[18]
  i1028.m_RaycastPadding = new pc.Vec4( i1029[19], i1029[20], i1029[21], i1029[22] )
  return i1028
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1030 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'skeletonDataAsset')
  i1030.initialSkinName = i1031[2]
  i1030.initialFlipX = !!i1031[3]
  i1030.initialFlipY = !!i1031[4]
  i1030.startingAnimation = i1031[5]
  i1030.startingLoop = !!i1031[6]
  i1030.timeScale = i1031[7]
  i1030.freeze = !!i1031[8]
  i1030.updateWhenInvisible = i1031[9]
  i1030.unscaledTime = !!i1031[10]
  i1030.allowMultipleCanvasRenderers = !!i1031[11]
  var i1033 = i1031[12]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1030.canvasRenderers = i1032
  i1030.enableSeparatorSlots = !!i1031[13]
  i1030.updateSeparatorPartLocation = !!i1031[14]
  var i1035 = i1031[15]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.separatorSlotNames = i1034
  var i1037 = i1031[16]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1030.separatorParts = i1036
  i1030.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1031[17], i1030.meshGenerator)
  request.r(i1031[18], i1031[19], 0, i1030, 'm_Material')
  i1030.m_Maskable = !!i1031[20]
  i1030.m_Color = new pc.Color(i1031[21], i1031[22], i1031[23], i1031[24])
  i1030.m_RaycastTarget = !!i1031[25]
  i1030.m_RaycastPadding = new pc.Vec4( i1031[26], i1031[27], i1031[28], i1031[29] )
  return i1030
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1040 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1041 = data
  i1040.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1041[0], i1040.settings)
  return i1040
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1043 = data
  i1042.useClipping = !!i1043[0]
  i1042.zSpacing = i1043[1]
  i1042.pmaVertexColors = !!i1043[2]
  i1042.tintBlack = !!i1043[3]
  i1042.canvasGroupTintBlack = !!i1043[4]
  i1042.calculateTangents = !!i1043[5]
  i1042.addNormals = !!i1043[6]
  i1042.immutableTriangles = !!i1043[7]
  return i1042
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.Button' )
  var i1045 = data
  i1044.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1045[0], i1044.m_OnClick)
  i1044.m_Navigation = request.d('UnityEngine.UI.Navigation', i1045[1], i1044.m_Navigation)
  i1044.m_Transition = i1045[2]
  i1044.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1045[3], i1044.m_Colors)
  i1044.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1045[4], i1044.m_SpriteState)
  i1044.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1045[5], i1044.m_AnimationTriggers)
  i1044.m_Interactable = !!i1045[6]
  request.r(i1045[7], i1045[8], 0, i1044, 'm_TargetGraphic')
  return i1044
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1047 = data
  i1046.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1047[0], i1046.m_PersistentCalls)
  return i1046
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('UnityEngine.Events.PersistentCall', i1051[i + 0]));
  }
  i1048.m_Calls = i1050
  return i1048
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'm_Target')
  i1054.m_TargetAssemblyTypeName = i1055[2]
  i1054.m_MethodName = i1055[3]
  i1054.m_Mode = i1055[4]
  i1054.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1055[5], i1054.m_Arguments)
  i1054.m_CallState = i1055[6]
  return i1054
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1057 = data
  i1056.m_Mode = i1057[0]
  i1056.m_WrapAround = !!i1057[1]
  request.r(i1057[2], i1057[3], 0, i1056, 'm_SelectOnUp')
  request.r(i1057[4], i1057[5], 0, i1056, 'm_SelectOnDown')
  request.r(i1057[6], i1057[7], 0, i1056, 'm_SelectOnLeft')
  request.r(i1057[8], i1057[9], 0, i1056, 'm_SelectOnRight')
  return i1056
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1059 = data
  i1058.m_NormalColor = new pc.Color(i1059[0], i1059[1], i1059[2], i1059[3])
  i1058.m_HighlightedColor = new pc.Color(i1059[4], i1059[5], i1059[6], i1059[7])
  i1058.m_PressedColor = new pc.Color(i1059[8], i1059[9], i1059[10], i1059[11])
  i1058.m_SelectedColor = new pc.Color(i1059[12], i1059[13], i1059[14], i1059[15])
  i1058.m_DisabledColor = new pc.Color(i1059[16], i1059[17], i1059[18], i1059[19])
  i1058.m_ColorMultiplier = i1059[20]
  i1058.m_FadeDuration = i1059[21]
  return i1058
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'm_HighlightedSprite')
  request.r(i1061[2], i1061[3], 0, i1060, 'm_PressedSprite')
  request.r(i1061[4], i1061[5], 0, i1060, 'm_SelectedSprite')
  request.r(i1061[6], i1061[7], 0, i1060, 'm_DisabledSprite')
  return i1060
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1063 = data
  i1062.m_NormalTrigger = i1063[0]
  i1062.m_HighlightedTrigger = i1063[1]
  i1062.m_PressedTrigger = i1063[2]
  i1062.m_SelectedTrigger = i1063[3]
  i1062.m_DisabledTrigger = i1063[4]
  return i1062
}

Deserializers["Projects.Scripts.UIController.ButtonEffect"] = function (request, data, root) {
  var i1064 = root || request.c( 'Projects.Scripts.UIController.ButtonEffect' )
  var i1065 = data
  return i1064
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'm_ObjectArgument')
  i1066.m_ObjectArgumentAssemblyTypeName = i1067[2]
  i1066.m_IntArgument = i1067[3]
  i1066.m_FloatArgument = i1067[4]
  i1066.m_StringArgument = i1067[5]
  i1066.m_BoolArgument = !!i1067[6]
  return i1066
}

Deserializers["Projects.Scripts.UIController.CustomButton"] = function (request, data, root) {
  var i1068 = root || request.c( 'Projects.Scripts.UIController.CustomButton' )
  var i1069 = data
  i1068.onClick = request.d('UnityEngine.Events.UnityEvent', i1069[0], i1068.onClick)
  i1068.onEnter = request.d('UnityEngine.Events.UnityEvent', i1069[1], i1068.onEnter)
  i1068.onExit = request.d('UnityEngine.Events.UnityEvent', i1069[2], i1068.onExit)
  i1068.interactive = !!i1069[3]
  request.r(i1069[4], i1069[5], 0, i1068, 'targetGraphic')
  return i1068
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1071 = data
  i1070.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1071[0], i1070.m_PersistentCalls)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  request.r(i1073[1], i1073[2], 0, i1072, 'sharedMaterial')
  var i1075 = i1073[3]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 2, i1074, '')
  }
  i1072.sharedMaterials = i1074
  i1072.receiveShadows = !!i1073[4]
  i1072.shadowCastingMode = i1073[5]
  i1072.sortingLayerID = i1073[6]
  i1072.sortingOrder = i1073[7]
  i1072.lightmapIndex = i1073[8]
  i1072.lightmapSceneIndex = i1073[9]
  i1072.lightmapScaleOffset = new pc.Vec4( i1073[10], i1073[11], i1073[12], i1073[13] )
  i1072.lightProbeUsage = i1073[14]
  i1072.reflectionProbeUsage = i1073[15]
  i1072.color = new pc.Color(i1073[16], i1073[17], i1073[18], i1073[19])
  request.r(i1073[20], i1073[21], 0, i1072, 'sprite')
  i1072.flipX = !!i1073[22]
  i1072.flipY = !!i1073[23]
  i1072.drawMode = i1073[24]
  i1072.size = new pc.Vec2( i1073[25], i1073[26] )
  i1072.tileMode = i1073[27]
  i1072.adaptiveModeThreshold = i1073[28]
  i1072.maskInteraction = i1073[29]
  i1072.spriteSortPoint = i1073[30]
  return i1072
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_FirstSelected')
  i1076.m_sendNavigationEvents = !!i1077[2]
  i1076.m_DragThreshold = i1077[3]
  return i1076
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1079 = data
  i1078.m_HorizontalAxis = i1079[0]
  i1078.m_VerticalAxis = i1079[1]
  i1078.m_SubmitButton = i1079[2]
  i1078.m_CancelButton = i1079[3]
  i1078.m_InputActionsPerSecond = i1079[4]
  i1078.m_RepeatDelay = i1079[5]
  i1078.m_ForceModuleActive = !!i1079[6]
  return i1078
}

Deserializers["Projects.Scripts.GamePlay.Item.MagnetItem"] = function (request, data, root) {
  var i1080 = root || request.c( 'Projects.Scripts.GamePlay.Item.MagnetItem' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'icon')
  request.r(i1081[2], i1081[3], 0, i1080, 'adsIcon')
  request.r(i1081[4], i1081[5], 0, i1080, 'container')
  request.r(i1081[6], i1081[7], 0, i1080, 'effect')
  request.r(i1081[8], i1081[9], 0, i1080, 'skeleton')
  i1080.idleAnim = i1081[10]
  i1080.triggerAnim = i1081[11]
  request.r(i1081[12], i1081[13], 0, i1080, 'collider')
  request.r(i1081[14], i1081[15], 0, i1080, 'audio')
  request.r(i1081[16], i1081[17], 0, i1080, 'stay')
  request.r(i1081[18], i1081[19], 0, i1080, 'move')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1083 = data
  i1082.usedByComposite = !!i1083[0]
  i1082.autoTiling = !!i1083[1]
  i1082.size = new pc.Vec2( i1083[2], i1083[3] )
  i1082.edgeRadius = i1083[4]
  i1082.enabled = !!i1083[5]
  i1082.isTrigger = !!i1083[6]
  i1082.usedByEffector = !!i1083[7]
  i1082.density = i1083[8]
  i1082.offset = new pc.Vec2( i1083[9], i1083[10] )
  request.r(i1083[11], i1083[12], 0, i1082, 'material')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'sharedMesh')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'additionalVertexStreams')
  i1086.enabled = !!i1087[2]
  request.r(i1087[3], i1087[4], 0, i1086, 'sharedMaterial')
  var i1089 = i1087[5]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1086.sharedMaterials = i1088
  i1086.receiveShadows = !!i1087[6]
  i1086.shadowCastingMode = i1087[7]
  i1086.sortingLayerID = i1087[8]
  i1086.sortingOrder = i1087[9]
  i1086.lightmapIndex = i1087[10]
  i1086.lightmapSceneIndex = i1087[11]
  i1086.lightmapScaleOffset = new pc.Vec4( i1087[12], i1087[13], i1087[14], i1087[15] )
  i1086.lightProbeUsage = i1087[16]
  i1086.reflectionProbeUsage = i1087[17]
  return i1086
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1090 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1091 = data
  i1090.loop = !!i1091[0]
  i1090.timeScale = i1091[1]
  request.r(i1091[2], i1091[3], 0, i1090, 'skeletonDataAsset')
  i1090.initialSkinName = i1091[4]
  i1090.initialFlipX = !!i1091[5]
  i1090.initialFlipY = !!i1091[6]
  i1090.updateWhenInvisible = i1091[7]
  i1090.zSpacing = i1091[8]
  i1090.useClipping = !!i1091[9]
  i1090.immutableTriangles = !!i1091[10]
  i1090.pmaVertexColors = !!i1091[11]
  i1090.clearStateOnDisable = !!i1091[12]
  i1090.tintBlack = !!i1091[13]
  i1090.singleSubmesh = !!i1091[14]
  i1090.fixDrawOrder = !!i1091[15]
  i1090.addNormals = !!i1091[16]
  i1090.calculateTangents = !!i1091[17]
  i1090.maskInteraction = i1091[18]
  i1090.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1091[19], i1090.maskMaterials)
  i1090.disableRenderingOnOverride = !!i1091[20]
  i1090._animationName = i1091[21]
  var i1093 = i1091[22]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1090.separatorSlotNames = i1092
  return i1090
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1094 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.materialsMaskDisabled = i1096
  var i1099 = i1095[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 2, i1098, '')
  }
  i1094.materialsInsideMask = i1098
  var i1101 = i1095[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1094.materialsOutsideMask = i1100
  return i1094
}

Deserializers["Spine.Unity.BoneFollower"] = function (request, data, root) {
  var i1102 = root || request.c( 'Spine.Unity.BoneFollower' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'skeletonRenderer')
  i1102.boneName = i1103[2]
  i1102.followXYPosition = !!i1103[3]
  i1102.followZPosition = !!i1103[4]
  i1102.followBoneRotation = !!i1103[5]
  i1102.followSkeletonFlip = !!i1103[6]
  i1102.followLocalScale = !!i1103[7]
  i1102.maintainedAxisOrientation = i1103[8]
  i1102.initializeOnAwake = !!i1103[9]
  return i1102
}

Deserializers["ThirdParties.Truongtv.SoundManager.SimpleAudio"] = function (request, data, root) {
  var i1104 = root || request.c( 'ThirdParties.Truongtv.SoundManager.SimpleAudio' )
  var i1105 = data
  i1104.autoPlay = !!i1105[0]
  i1104.loop = !!i1105[1]
  return i1104
}

Deserializers["Projects.Scripts.GamePlay.Platform.Gate"] = function (request, data, root) {
  var i1106 = root || request.c( 'Projects.Scripts.GamePlay.Platform.Gate' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'target')
  request.r(i1107[2], i1107[3], 0, i1106, 'gateLight')
  request.r(i1107[4], i1107[5], 0, i1106, 'collider')
  i1106.ballLayer = UnityEngine.LayerMask.FromIntegerValue( i1107[6] )
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1109 = data
  i1108.enabled = !!i1109[0]
  request.r(i1109[1], i1109[2], 0, i1108, 'sharedMaterial')
  var i1111 = i1109[3]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1108.sharedMaterials = i1110
  i1108.receiveShadows = !!i1109[4]
  i1108.shadowCastingMode = i1109[5]
  i1108.sortingLayerID = i1109[6]
  i1108.sortingOrder = i1109[7]
  i1108.lightmapIndex = i1109[8]
  i1108.lightmapSceneIndex = i1109[9]
  i1108.lightmapScaleOffset = new pc.Vec4( i1109[10], i1109[11], i1109[12], i1109[13] )
  i1108.lightProbeUsage = i1109[14]
  i1108.reflectionProbeUsage = i1109[15]
  i1108.frontSortingLayerID = i1109[16]
  i1108.frontSortingOrder = i1109[17]
  i1108.backSortingLayerID = i1109[18]
  i1108.backSortingOrder = i1109[19]
  i1108.alphaCutoff = i1109[20]
  request.r(i1109[21], i1109[22], 0, i1108, 'sprite')
  i1108.tileMode = i1109[23]
  i1108.isCustomRangeActive = !!i1109[24]
  i1108.spriteSortPoint = i1109[25]
  return i1108
}

Deserializers["Projects.Scripts.GamePlay.Enemy.EnemyController"] = function (request, data, root) {
  var i1112 = root || request.c( 'Projects.Scripts.GamePlay.Enemy.EnemyController' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'icon')
  request.r(i1113[2], i1113[3], 0, i1112, 'health')
  request.r(i1113[4], i1113[5], 0, i1112, 'attack')
  request.r(i1113[6], i1113[7], 0, i1112, 'dieEffect')
  request.r(i1113[8], i1113[9], 0, i1112, 'damageEffect')
  request.r(i1113[10], i1113[11], 0, i1112, 'anim')
  i1112.idle = i1113[12]
  i1112.die = i1113[13]
  i1112.idle_fx = i1113[14]
  i1112.move = i1113[15]
  i1112.chasing = i1113[16]
  i1112.fixedMovement = !!i1113[17]
  i1112.isFallDead = !!i1113[18]
  i1112.isStar = !!i1113[19]
  request.r(i1113[20], i1113[21], 0, i1112, 'detectCamera')
  request.r(i1113[22], i1113[23], 0, i1112, 'dieSfx')
  request.r(i1113[24], i1113[25], 0, i1112, 'movingSfx')
  request.r(i1113[26], i1113[27], 0, i1112, 'idleSfx')
  i1112.maxHp = i1113[28]
  i1112.currentHp = i1113[29]
  request.r(i1113[30], i1113[31], 0, i1112, 'starPrefab')
  i1112.delaySpawnStar = i1113[32]
  i1112.spawnDir = new pc.Vec2( i1113[33], i1113[34] )
  i1112.forceSpawn = i1113[35]
  return i1112
}

Deserializers["Projects.Scripts.GamePlay.Item.Cage"] = function (request, data, root) {
  var i1114 = root || request.c( 'Projects.Scripts.GamePlay.Item.Cage' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'ballImprisoned')
  i1114.startAnimation = i1115[2]
  i1114.rescueAnimation = i1115[3]
  i1114.trySkinName = i1115[4]
  request.r(i1115[5], i1115[6], 0, i1114, 'cageSkeleton')
  i1114.cageBreakAnim = i1115[7]
  request.r(i1115[8], i1115[9], 0, i1114, 'collider')
  i1114.triggerLayer = UnityEngine.LayerMask.FromIntegerValue( i1115[10] )
  return i1114
}

Deserializers["Projects.Scripts.GamePlay.Building.StartLevel"] = function (request, data, root) {
  var i1116 = root || request.c( 'Projects.Scripts.GamePlay.Building.StartLevel' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'checkPoint')
  request.r(i1117[2], i1117[3], 0, i1116, 'levelText')
  return i1116
}

Deserializers["Projects.Scripts.GamePlay.Building.CheckPoint"] = function (request, data, root) {
  var i1118 = root || request.c( 'Projects.Scripts.GamePlay.Building.CheckPoint' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'reviveEffect')
  request.r(i1119[2], i1119[3], 0, i1118, 'animation')
  request.r(i1119[4], i1119[5], 0, i1118, 'collider')
  i1118.playSound = !!i1119[6]
  return i1118
}

Deserializers["BrokenPlatform"] = function (request, data, root) {
  var i1120 = root || request.c( 'BrokenPlatform' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'platformBreakingSound')
  request.r(i1121[2], i1121[3], 0, i1120, 'platformExplodeSound')
  request.r(i1121[4], i1121[5], 0, i1120, 'platformAppearSound')
  i1120.breakDelay = i1121[6]
  i1120.respawnDelay = i1121[7]
  request.r(i1121[8], i1121[9], 0, i1120, 'breakEffect')
  request.r(i1121[10], i1121[11], 0, i1120, 'breakDelayEffect')
  request.r(i1121[12], i1121[13], 0, i1120, 'respawnEffect')
  request.r(i1121[14], i1121[15], 0, i1120, 'sprite')
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'animatorController')
  i1122.updateMode = i1123[2]
  var i1125 = i1123[3]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.humanBones = i1124
  i1122.enabled = !!i1123[4]
  return i1122
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i1126 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'boneRoot')
  i1126.flipBy180DegreeRotation = !!i1127[2]
  request.r(i1127[3], i1127[4], 0, i1126, 'skeletonRenderer')
  request.r(i1127[5], i1127[6], 0, i1126, 'skeletonGraphic')
  return i1126
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i1128 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i1129 = data
  i1128.boneName = i1129[0]
  request.r(i1129[1], i1129[2], 0, i1128, 'parentReference')
  i1128.mode = i1129[3]
  i1128.position = !!i1129[4]
  i1128.rotation = !!i1129[5]
  i1128.scale = !!i1129[6]
  i1128.zPosition = !!i1129[7]
  i1128.overrideAlpha = i1129[8]
  request.r(i1129[9], i1129[10], 0, i1128, 'hierarchy')
  return i1128
}

Deserializers["Projects.Scripts.GamePlay.Item.Coin"] = function (request, data, root) {
  var i1130 = root || request.c( 'Projects.Scripts.GamePlay.Item.Coin' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'icon')
  request.r(i1131[2], i1131[3], 0, i1130, 'effect')
  request.r(i1131[4], i1131[5], 0, i1130, 'collider')
  i1130.mask = UnityEngine.LayerMask.FromIntegerValue( i1131[6] )
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1133 = data
  i1132.radius = i1133[0]
  i1132.enabled = !!i1133[1]
  i1132.isTrigger = !!i1133[2]
  i1132.usedByEffector = !!i1133[3]
  i1132.density = i1133[4]
  i1132.offset = new pc.Vec2( i1133[5], i1133[6] )
  request.r(i1133[7], i1133[8], 0, i1132, 'material')
  return i1132
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.FollowCharacter"] = function (request, data, root) {
  var i1134 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.FollowCharacter' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'followTransform')
  i1134.offset = new pc.Vec2( i1135[2], i1135[3] )
  return i1134
}

Deserializers["ThirdParties.Truongtv.SoundManager.Bgm"] = function (request, data, root) {
  var i1136 = root || request.c( 'ThirdParties.Truongtv.SoundManager.Bgm' )
  var i1137 = data
  return i1136
}

Deserializers["Truongtv.Utilities.DontDestroyOnLoad"] = function (request, data, root) {
  var i1138 = root || request.c( 'Truongtv.Utilities.DontDestroyOnLoad' )
  var i1139 = data
  return i1138
}

Deserializers["Projects.Scripts.GamePlay.Item.TrySkinItem"] = function (request, data, root) {
  var i1140 = root || request.c( 'Projects.Scripts.GamePlay.Item.TrySkinItem' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'icon')
  request.r(i1141[2], i1141[3], 0, i1140, 'skin')
  request.r(i1141[4], i1141[5], 0, i1140, 'adsIcon')
  request.r(i1141[6], i1141[7], 0, i1140, 'container')
  request.r(i1141[8], i1141[9], 0, i1140, 'effect')
  i1140._trySkinName = i1141[10]
  request.r(i1141[11], i1141[12], 0, i1140, 'collider')
  request.r(i1141[13], i1141[14], 0, i1140, 'audio')
  request.r(i1141[15], i1141[16], 0, i1140, 'stay')
  request.r(i1141[17], i1141[18], 0, i1140, 'move')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1143 = data
  i1142.bodyType = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'material')
  i1142.simulated = !!i1143[3]
  i1142.useAutoMass = !!i1143[4]
  i1142.mass = i1143[5]
  i1142.drag = i1143[6]
  i1142.angularDrag = i1143[7]
  i1142.gravityScale = i1143[8]
  i1142.collisionDetectionMode = i1143[9]
  i1142.sleepMode = i1143[10]
  i1142.constraints = i1143[11]
  return i1142
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.BallMovement"] = function (request, data, root) {
  var i1144 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.BallMovement' )
  var i1145 = data
  i1144.moveDirection = i1145[0]
  i1144.moveSpeed = i1145[1]
  i1144.acceleration = i1145[2]
  i1144.decceleration = i1145[3]
  i1144.deccelTime = i1145[4]
  request.r(i1145[5], i1145[6], 0, i1144, 'icon')
  request.r(i1145[7], i1145[8], 0, i1144, 'totalDisplay')
  i1144.jumpForce = i1145[9]
  i1144.jumpCutMultiple = i1145[10]
  i1144.gravityScale = i1145[11]
  i1144.fallGravityMultiple = i1145[12]
  request.r(i1145[13], i1145[14], 0, i1144, 'rigidbody2D')
  i1144.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1145[15] )
  i1144.wallLayer = UnityEngine.LayerMask.FromIntegerValue( i1145[16] )
  i1144.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i1145[17] )
  request.r(i1145[18], i1145[19], 0, i1144, 'groundCheckPoint')
  i1144.ballRadius = i1145[20]
  i1144.JumpCoyoteTime = i1145[21]
  i1144.jumpBufferTime = i1145[22]
  i1144.forcePushBox = i1145[23]
  request.r(i1145[24], i1145[25], 0, i1144, 'landingEffect')
  request.r(i1145[26], i1145[27], 0, i1144, 'moveEffect')
  i1144.effectByForceTime = i1145[28]
  return i1144
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.BallMagnetic"] = function (request, data, root) {
  var i1146 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.BallMagnetic' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'magnetic')
  request.r(i1147[2], i1147[3], 0, i1146, 'magnetEffect')
  return i1146
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.BallController"] = function (request, data, root) {
  var i1148 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.BallController' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'animation')
  request.r(i1149[2], i1149[3], 0, i1148, 'magnetic')
  request.r(i1149[4], i1149[5], 0, i1148, 'movement')
  request.r(i1149[6], i1149[7], 0, i1148, 'health')
  request.r(i1149[8], i1149[9], 0, i1148, 'attack')
  request.r(i1149[10], i1149[11], 0, i1148, 'attackTransform')
  request.r(i1149[12], i1149[13], 0, i1148, 'heartEffect')
  return i1148
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.BallHealth"] = function (request, data, root) {
  var i1150 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.BallHealth' )
  var i1151 = data
  i1150.isDie = !!i1151[0]
  i1150.maxHp = i1151[1]
  i1150.currentHp = i1151[2]
  i1150.damageForce = new pc.Vec2( i1151[3], i1151[4] )
  i1150.waterForce = new pc.Vec2( i1151[5], i1151[6] )
  request.r(i1151[7], i1151[8], 0, i1150, 'damageEffect')
  request.r(i1151[9], i1151[10], 0, i1150, 'icon')
  request.r(i1151[11], i1151[12], 0, i1150, 'dieEffect')
  return i1150
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.BallAnimation"] = function (request, data, root) {
  var i1152 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.BallAnimation' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'skeleton')
  i1152.idle = i1153[2]
  i1152.die = i1153[3]
  i1152.getHurt = i1153[4]
  i1152.drowning = i1153[5]
  i1152.revive = i1153[6]
  i1152.smile = i1153[7]
  var i1155 = i1153[8]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1152.mix = i1154
  return i1152
}

Deserializers["Projects.Scripts.GamePlay.CharacterController.BallAttack"] = function (request, data, root) {
  var i1156 = root || request.c( 'Projects.Scripts.GamePlay.CharacterController.BallAttack' )
  var i1157 = data
  i1156.pauseDuration = i1157[0]
  i1156.timeScale = i1157[1]
  i1156.attackLayer = UnityEngine.LayerMask.FromIntegerValue( i1157[2] )
  i1156.attackForce = new pc.Vec2( i1157[3], i1157[4] )
  return i1156
}

Deserializers["Projects.Scripts.GamePlay.ObjectCollision"] = function (request, data, root) {
  var i1158 = root || request.c( 'Projects.Scripts.GamePlay.ObjectCollision' )
  var i1159 = data
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1161 = data
  i1160.enabled = !!i1161[0]
  i1160.aspect = i1161[1]
  i1160.orthographic = !!i1161[2]
  i1160.orthographicSize = i1161[3]
  i1160.backgroundColor = new pc.Color(i1161[4], i1161[5], i1161[6], i1161[7])
  i1160.nearClipPlane = i1161[8]
  i1160.farClipPlane = i1161[9]
  i1160.fieldOfView = i1161[10]
  i1160.depth = i1161[11]
  i1160.clearFlags = i1161[12]
  i1160.cullingMask = i1161[13]
  i1160.rect = i1161[14]
  request.r(i1161[15], i1161[16], 0, i1160, 'targetTexture')
  return i1160
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i1162 = root || request.c( 'CameraFollower' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'target')
  i1162.maxY = i1163[2]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1165 = data
  i1164.enabled = !!i1165[0]
  i1164.isTrigger = !!i1165[1]
  i1164.usedByEffector = !!i1165[2]
  i1164.density = i1165[3]
  i1164.offset = new pc.Vec2( i1165[4], i1165[5] )
  request.r(i1165[6], i1165[7], 0, i1164, 'material')
  i1164.usedByComposite = !!i1165[8]
  i1164.autoTiling = !!i1165[9]
  var i1167 = i1165[10]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
  var i1169 = i1167[i + 0]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 2) {
    i1168.push( new pc.Vec2( i1169[i + 0], i1169[i + 1] ) );
  }
    i1166.push( i1168 );
  }
  i1164.points = i1166
  return i1164
}

Deserializers["Projects.Scripts.GamePlay.Item.Star"] = function (request, data, root) {
  var i1176 = root || request.c( 'Projects.Scripts.GamePlay.Item.Star' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'collider')
  request.r(i1177[2], i1177[3], 0, i1176, 'icon')
  request.r(i1177[4], i1177[5], 0, i1176, 'effect')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1179 = data
  i1178.ambientIntensity = i1179[0]
  i1178.reflectionIntensity = i1179[1]
  i1178.ambientMode = i1179[2]
  i1178.ambientLight = new pc.Color(i1179[3], i1179[4], i1179[5], i1179[6])
  i1178.ambientSkyColor = new pc.Color(i1179[7], i1179[8], i1179[9], i1179[10])
  i1178.ambientGroundColor = new pc.Color(i1179[11], i1179[12], i1179[13], i1179[14])
  i1178.ambientEquatorColor = new pc.Color(i1179[15], i1179[16], i1179[17], i1179[18])
  i1178.fogColor = new pc.Color(i1179[19], i1179[20], i1179[21], i1179[22])
  i1178.fogEndDistance = i1179[23]
  i1178.fogStartDistance = i1179[24]
  i1178.fogDensity = i1179[25]
  i1178.fog = !!i1179[26]
  request.r(i1179[27], i1179[28], 0, i1178, 'skybox')
  i1178.fogMode = i1179[29]
  var i1181 = i1179[30]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1181[i + 0]) );
  }
  i1178.lightmaps = i1180
  i1178.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1179[31], i1178.lightProbes)
  i1178.lightmapsMode = i1179[32]
  i1178.environmentLightingMode = i1179[33]
  i1178.ambientProbe = new pc.SphericalHarmonicsL2(i1179[34])
  request.r(i1179[35], i1179[36], 0, i1178, 'customReflection')
  request.r(i1179[37], i1179[38], 0, i1178, 'defaultReflection')
  i1178.defaultReflectionMode = i1179[39]
  i1178.defaultReflectionResolution = i1179[40]
  i1178.sunLightObjectId = i1179[41]
  i1178.pixelLightCount = i1179[42]
  i1178.defaultReflectionHDR = !!i1179[43]
  i1178.hasLightDataAsset = !!i1179[44]
  i1178.hasManualGenerate = !!i1179[45]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'lightmapColor')
  request.r(i1185[2], i1185[3], 0, i1184, 'lightmapDirection')
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1186 = root || new UnityEngine.LightProbes()
  var i1187 = data
  return i1186
}

Deserializers["Projects.Scripts.GamePlay.Item.HeartItem"] = function (request, data, root) {
  var i1194 = root || request.c( 'Projects.Scripts.GamePlay.Item.HeartItem' )
  var i1195 = data
  i1194.watchAd = !!i1195[0]
  request.r(i1195[1], i1195[2], 0, i1194, 'icon')
  request.r(i1195[3], i1195[4], 0, i1194, 'adsIcon')
  request.r(i1195[5], i1195[6], 0, i1194, 'container')
  request.r(i1195[7], i1195[8], 0, i1194, 'effect')
  request.r(i1195[9], i1195[10], 0, i1194, 'skeleton')
  i1194.idleAnim = i1195[11]
  i1194.triggerAnim = i1195[12]
  request.r(i1195[13], i1195[14], 0, i1194, 'collider')
  request.r(i1195[15], i1195[16], 0, i1194, 'audio')
  request.r(i1195[17], i1195[18], 0, i1194, 'stay')
  request.r(i1195[19], i1195[20], 0, i1194, 'move')
  return i1194
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1196 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1197 = data
  i1196.useSafeMode = !!i1197[0]
  i1196.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1197[1], i1196.safeModeOptions)
  i1196.timeScale = i1197[2]
  i1196.useSmoothDeltaTime = !!i1197[3]
  i1196.maxSmoothUnscaledTime = i1197[4]
  i1196.rewindCallbackMode = i1197[5]
  i1196.showUnityEditorReport = !!i1197[6]
  i1196.logBehaviour = i1197[7]
  i1196.drawGizmos = !!i1197[8]
  i1196.defaultRecyclable = !!i1197[9]
  i1196.defaultAutoPlay = i1197[10]
  i1196.defaultUpdateType = i1197[11]
  i1196.defaultTimeScaleIndependent = !!i1197[12]
  i1196.defaultEaseType = i1197[13]
  i1196.defaultEaseOvershootOrAmplitude = i1197[14]
  i1196.defaultEasePeriod = i1197[15]
  i1196.defaultAutoKill = !!i1197[16]
  i1196.defaultLoopType = i1197[17]
  i1196.debugMode = !!i1197[18]
  i1196.debugStoreTargetId = !!i1197[19]
  i1196.showPreviewPanel = !!i1197[20]
  i1196.storeSettingsLocation = i1197[21]
  i1196.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1197[22], i1196.modules)
  i1196.showPlayingTweens = !!i1197[23]
  i1196.showPausedTweens = !!i1197[24]
  return i1196
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1198 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1199 = data
  i1198.nestedTweenFailureBehaviour = i1199[0]
  return i1198
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1200 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1201 = data
  i1200.showPanel = !!i1201[0]
  i1200.audioEnabled = !!i1201[1]
  i1200.physicsEnabled = !!i1201[2]
  i1200.physics2DEnabled = !!i1201[3]
  i1200.spriteEnabled = !!i1201[4]
  i1200.uiEnabled = !!i1201[5]
  i1200.textMeshProEnabled = !!i1201[6]
  i1200.tk2DEnabled = !!i1201[7]
  i1200.deAudioEnabled = !!i1201[8]
  i1200.deUnityExtendedEnabled = !!i1201[9]
  return i1200
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_Settings' )
  var i1203 = data
  i1202.m_enableWordWrapping = !!i1203[0]
  i1202.m_enableKerning = !!i1203[1]
  i1202.m_enableExtraPadding = !!i1203[2]
  i1202.m_enableTintAllSprites = !!i1203[3]
  i1202.m_enableParseEscapeCharacters = !!i1203[4]
  i1202.m_EnableRaycastTarget = !!i1203[5]
  i1202.m_GetFontFeaturesAtRuntime = !!i1203[6]
  i1202.m_missingGlyphCharacter = i1203[7]
  i1202.m_warningsDisabled = !!i1203[8]
  request.r(i1203[9], i1203[10], 0, i1202, 'm_defaultFontAsset')
  i1202.m_defaultFontAssetPath = i1203[11]
  i1202.m_defaultFontSize = i1203[12]
  i1202.m_defaultAutoSizeMinRatio = i1203[13]
  i1202.m_defaultAutoSizeMaxRatio = i1203[14]
  i1202.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1203[15], i1203[16] )
  i1202.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1203[17], i1203[18] )
  i1202.m_autoSizeTextContainer = !!i1203[19]
  i1202.m_IsTextObjectScaleStatic = !!i1203[20]
  var i1205 = i1203[21]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1205.length; i += 2) {
  request.r(i1205[i + 0], i1205[i + 1], 1, i1204, '')
  }
  i1202.m_fallbackFontAssets = i1204
  i1202.m_matchMaterialPreset = !!i1203[22]
  request.r(i1203[23], i1203[24], 0, i1202, 'm_defaultSpriteAsset')
  i1202.m_defaultSpriteAssetPath = i1203[25]
  i1202.m_enableEmojiSupport = !!i1203[26]
  i1202.m_MissingCharacterSpriteUnicode = i1203[27]
  i1202.m_defaultColorGradientPresetsPath = i1203[28]
  request.r(i1203[29], i1203[30], 0, i1202, 'm_defaultStyleSheet')
  i1202.m_StyleSheetsResourcePath = i1203[31]
  request.r(i1203[32], i1203[33], 0, i1202, 'm_leadingCharacters')
  request.r(i1203[34], i1203[35], 0, i1202, 'm_followingCharacters')
  i1202.m_UseModernHangulLineBreakingRules = !!i1203[36]
  return i1202
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1207 = data
  i1206.hashCode = i1207[0]
  request.r(i1207[1], i1207[2], 0, i1206, 'material')
  i1206.materialHashCode = i1207[3]
  request.r(i1207[4], i1207[5], 0, i1206, 'spriteSheet')
  var i1209 = i1207[6]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Sprite', i1209[i + 0]));
  }
  i1206.spriteInfoList = i1208
  var i1211 = i1207[7]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1206.fallbackSpriteAssets = i1210
  i1206.m_Version = i1207[8]
  i1206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1207[9], i1206.m_FaceInfo)
  var i1213 = i1207[10]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_SpriteCharacter', i1213[i + 0]));
  }
  i1206.m_SpriteCharacterTable = i1212
  var i1215 = i1207[11]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_SpriteGlyph', i1215[i + 0]));
  }
  i1206.m_SpriteGlyphTable = i1214
  return i1206
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.hashCode = i1219[1]
  i1218.unicode = i1219[2]
  i1218.pivot = new pc.Vec2( i1219[3], i1219[4] )
  request.r(i1219[5], i1219[6], 0, i1218, 'sprite')
  i1218.id = i1219[7]
  i1218.x = i1219[8]
  i1218.y = i1219[9]
  i1218.width = i1219[10]
  i1218.height = i1219[11]
  i1218.xOffset = i1219[12]
  i1218.yOffset = i1219[13]
  i1218.xAdvance = i1219[14]
  i1218.scale = i1219[15]
  return i1218
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_HashCode = i1225[1]
  i1224.m_ElementType = i1225[2]
  i1224.m_Unicode = i1225[3]
  i1224.m_GlyphIndex = i1225[4]
  i1224.m_Scale = i1225[5]
  return i1224
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'sprite')
  i1228.m_Index = i1229[2]
  i1228.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1229[3], i1228.m_Metrics)
  i1228.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1229[4], i1228.m_GlyphRect)
  i1228.m_Scale = i1229[5]
  i1228.m_AtlasIndex = i1229[6]
  return i1228
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Style', i1233[i + 0]));
  }
  i1230.m_StyleList = i1232
  return i1230
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_Style' )
  var i1237 = data
  i1236.m_Name = i1237[0]
  i1236.m_HashCode = i1237[1]
  i1236.m_OpeningDefinition = i1237[2]
  i1236.m_ClosingDefinition = i1237[3]
  i1236.m_OpeningTagArray = i1237[4]
  i1236.m_ClosingTagArray = i1237[5]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(i1241[i + 0]);
  }
  i1238.invalidShaderVariants = i1240
  i1238.name = i1239[1]
  i1238.guid = i1239[2]
  var i1243 = i1239[3]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1238.shaderDefinedKeywords = i1242
  var i1245 = i1239[4]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1245[i + 0]) );
  }
  i1238.passes = i1244
  var i1247 = i1239[5]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1247[i + 0]) );
  }
  i1238.defaultParameterValues = i1246
  request.r(i1239[6], i1239[7], 0, i1238, 'unityFallbackShader')
  i1238.readDepth = !!i1239[8]
  i1238.isCreatedByShaderGraph = !!i1239[9]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1252 = root || new pc.UnityShaderPass()
  var i1253 = data
  i1252.passType = i1253[0]
  i1252.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[1], i1252.zTest)
  i1252.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[2], i1252.zWrite)
  i1252.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[3], i1252.culling)
  i1252.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1253[4], i1252.blending)
  i1252.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1253[5], i1252.alphaBlending)
  i1252.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[6], i1252.colorWriteMask)
  i1252.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[7], i1252.offsetUnits)
  i1252.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[8], i1252.offsetFactor)
  i1252.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[9], i1252.stencilRef)
  i1252.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[10], i1252.stencilReadMask)
  i1252.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[11], i1252.stencilWriteMask)
  i1252.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1253[12], i1252.stencilOp)
  i1252.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1253[13], i1252.stencilOpFront)
  i1252.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1253[14], i1252.stencilOpBack)
  var i1255 = i1253[15]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1255[i + 0]) );
  }
  i1252.tags = i1254
  var i1257 = i1253[16]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1252.passDefinedKeywords = i1256
  var i1259 = i1253[17]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1259[i + 0]) );
  }
  i1252.variants = i1258
  i1252.readDepth = !!i1253[18]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1261 = data
  i1260.val = i1261[0]
  i1260.name = i1261[1]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1263 = data
  i1262.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[0], i1262.src)
  i1262.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[1], i1262.dst)
  i1262.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[2], i1262.op)
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1265 = data
  i1264.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1265[0], i1264.pass)
  i1264.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1265[1], i1264.fail)
  i1264.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1265[2], i1264.zFail)
  i1264.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1265[3], i1264.comp)
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1269 = data
  i1268.name = i1269[0]
  i1268.value = i1269[1]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1272.keywords = i1274
  i1272.vertexProgram = i1273[1]
  i1272.fragmentProgram = i1273[2]
  i1272.readDepth = !!i1273[3]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.type = i1279[1]
  i1278.value = new pc.Vec4( i1279[2], i1279[3], i1279[4], i1279[5] )
  i1278.textureValue = i1279[6]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1281 = data
  i1280.name = i1281[0]
  request.r(i1281[1], i1281[2], 0, i1280, 'texture')
  i1280.aabb = i1281[3]
  i1280.vertices = i1281[4]
  i1280.triangles = i1281[5]
  i1280.textureRect = UnityEngine.Rect.MinMaxRect(i1281[6], i1281[7], i1281[8], i1281[9])
  i1280.packedRect = UnityEngine.Rect.MinMaxRect(i1281[10], i1281[11], i1281[12], i1281[13])
  i1280.border = new pc.Vec4( i1281[14], i1281[15], i1281[16], i1281[17] )
  i1280.transparency = i1281[18]
  i1280.bounds = i1281[19]
  i1280.pixelsPerUnit = i1281[20]
  i1280.textureWidth = i1281[21]
  i1280.textureHeight = i1281[22]
  i1280.nativeSize = new pc.Vec2( i1281[23], i1281[24] )
  i1280.pivot = new pc.Vec2( i1281[25], i1281[26] )
  i1280.textureRectOffset = new pc.Vec2( i1281[27], i1281[28] )
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1283 = data
  i1282.name = i1283[0]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1285 = data
  i1284.name = i1285[0]
  i1284.wrapMode = i1285[1]
  i1284.isLooping = !!i1285[2]
  i1284.length = i1285[3]
  var i1287 = i1285[4]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1287[i + 0]) );
  }
  i1284.curves = i1286
  var i1289 = i1285[5]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1289[i + 0]) );
  }
  i1284.events = i1288
  i1284.halfPrecision = !!i1285[6]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1293 = data
  i1292.path = i1293[0]
  i1292.componentType = i1293[1]
  i1292.property = i1293[2]
  i1292.keys = i1293[3]
  var i1295 = i1293[4]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1295[i + 0]) );
  }
  i1292.objectReferenceKeys = i1294
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1299 = data
  i1298.time = i1299[0]
  request.r(i1299[1], i1299[2], 0, i1298, 'value')
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1303 = data
  i1302.functionName = i1303[0]
  i1302.floatParameter = i1303[1]
  i1302.intParameter = i1303[2]
  i1302.stringParameter = i1303[3]
  request.r(i1303[4], i1303[5], 0, i1302, 'objectReferenceParameter')
  i1302.time = i1303[6]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1305 = data
  i1304.name = i1305[0]
  i1304.ascent = i1305[1]
  i1304.originalLineHeight = i1305[2]
  i1304.fontSize = i1305[3]
  var i1307 = i1305[4]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1307[i + 0]) );
  }
  i1304.characterInfo = i1306
  request.r(i1305[5], i1305[6], 0, i1304, 'texture')
  i1304.originalFontSize = i1305[7]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1311 = data
  i1310.index = i1311[0]
  i1310.advance = i1311[1]
  i1310.bearing = i1311[2]
  i1310.glyphWidth = i1311[3]
  i1310.glyphHeight = i1311[4]
  i1310.minX = i1311[5]
  i1310.maxX = i1311[6]
  i1310.minY = i1311[7]
  i1310.maxY = i1311[8]
  i1310.uvBottomLeftX = i1311[9]
  i1310.uvBottomLeftY = i1311[10]
  i1310.uvBottomRightX = i1311[11]
  i1310.uvBottomRightY = i1311[12]
  i1310.uvTopLeftX = i1311[13]
  i1310.uvTopLeftY = i1311[14]
  i1310.uvTopRightX = i1311[15]
  i1310.uvTopRightY = i1311[16]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1313 = data
  i1312.name = i1313[0]
  var i1315 = i1313[1]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1315[i + 0]) );
  }
  i1312.states = i1314
  var i1317 = i1313[2]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1317[i + 0]) );
  }
  i1312.layers = i1316
  var i1319 = i1313[3]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1319[i + 0]) );
  }
  i1312.parameters = i1318
  var i1321 = i1313[4]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( i1321[i + 0] );
  }
  i1312.animationClips = i1320
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1325 = data
  i1324.cycleOffset = i1325[0]
  i1324.cycleOffsetParameter = i1325[1]
  i1324.cycleOffsetParameterActive = !!i1325[2]
  i1324.mirror = !!i1325[3]
  i1324.mirrorParameter = i1325[4]
  i1324.mirrorParameterActive = !!i1325[5]
  i1324.motionId = i1325[6]
  i1324.nameHash = i1325[7]
  i1324.fullPathHash = i1325[8]
  i1324.speed = i1325[9]
  i1324.speedParameter = i1325[10]
  i1324.speedParameterActive = !!i1325[11]
  i1324.tag = i1325[12]
  i1324.name = i1325[13]
  i1324.writeDefaultValues = !!i1325[14]
  var i1327 = i1325[15]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1327[i + 0]) );
  }
  i1324.transitions = i1326
  var i1329 = i1325[16]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 2, i1328, '')
  }
  i1324.behaviours = i1328
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1333 = data
  i1332.fullPath = i1333[0]
  i1332.canTransitionToSelf = !!i1333[1]
  i1332.duration = i1333[2]
  i1332.exitTime = i1333[3]
  i1332.hasExitTime = !!i1333[4]
  i1332.hasFixedDuration = !!i1333[5]
  i1332.interruptionSource = i1333[6]
  i1332.offset = i1333[7]
  i1332.orderedInterruption = !!i1333[8]
  i1332.destinationStateNameHash = i1333[9]
  i1332.destinationStateMachineId = i1333[10]
  i1332.isExit = !!i1333[11]
  i1332.mute = !!i1333[12]
  i1332.solo = !!i1333[13]
  var i1335 = i1333[14]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1335[i + 0]) );
  }
  i1332.conditions = i1334
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1341 = data
  i1340.blendingMode = i1341[0]
  i1340.defaultWeight = i1341[1]
  i1340.name = i1341[2]
  i1340.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1341[3], i1340.stateMachine)
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.defaultStateNameHash = i1343[1]
  var i1345 = i1343[2]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1345[i + 0]) );
  }
  i1342.entryTransitions = i1344
  var i1347 = i1343[3]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1347[i + 0]) );
  }
  i1342.anyStateTransitions = i1346
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1351 = data
  i1350.destinationStateNameHash = i1351[0]
  i1350.destinationStateMachineId = i1351[1]
  i1350.isExit = !!i1351[2]
  i1350.mute = !!i1351[3]
  i1350.solo = !!i1351[4]
  var i1353 = i1351[5]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1353[i + 0]) );
  }
  i1350.conditions = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1357 = data
  i1356.defaultBool = !!i1357[0]
  i1356.defaultFloat = i1357[1]
  i1356.defaultInt = i1357[2]
  i1356.name = i1357[3]
  i1356.nameHash = i1357[4]
  i1356.type = i1357[5]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.bytes64 = i1359[1]
  i1358.data = i1359[2]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1363[i + 0]) );
  }
  i1360.files = i1362
  i1360.componentToPrefabIds = i1361[1]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1367 = data
  i1366.path = i1367[0]
  request.r(i1367[1], i1367[2], 0, i1366, 'unityObject')
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1371[i + 0]) );
  }
  i1368.scriptsExecutionOrder = i1370
  var i1373 = i1369[1]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1373[i + 0]) );
  }
  i1368.sortingLayers = i1372
  var i1375 = i1369[2]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1375[i + 0]) );
  }
  i1368.cullingLayers = i1374
  i1368.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1369[3], i1368.timeSettings)
  i1368.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1369[4], i1368.physicsSettings)
  i1368.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1369[5], i1368.physics2DSettings)
  i1368.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1369[6], i1368.qualitySettings)
  i1368.removeShadows = !!i1369[7]
  i1368.autoInstantiatePrefabs = !!i1369[8]
  i1368.enableAutoInstancing = !!i1369[9]
  i1368.lightmapEncodingQuality = i1369[10]
  i1368.desiredColorSpace = i1369[11]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1379 = data
  i1378.name = i1379[0]
  i1378.value = i1379[1]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1383 = data
  i1382.id = i1383[0]
  i1382.name = i1383[1]
  i1382.value = i1383[2]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1387 = data
  i1386.id = i1387[0]
  i1386.name = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1389 = data
  i1388.fixedDeltaTime = i1389[0]
  i1388.maximumDeltaTime = i1389[1]
  i1388.timeScale = i1389[2]
  i1388.maximumParticleTimestep = i1389[3]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1391 = data
  i1390.gravity = new pc.Vec3( i1391[0], i1391[1], i1391[2] )
  i1390.defaultSolverIterations = i1391[3]
  i1390.bounceThreshold = i1391[4]
  i1390.autoSyncTransforms = !!i1391[5]
  i1390.autoSimulation = !!i1391[6]
  var i1393 = i1391[7]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1393[i + 0]) );
  }
  i1390.collisionMatrix = i1392
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1397 = data
  i1396.enabled = !!i1397[0]
  i1396.layerId = i1397[1]
  i1396.otherLayerId = i1397[2]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1399 = data
  request.r(i1399[0], i1399[1], 0, i1398, 'material')
  i1398.gravity = new pc.Vec2( i1399[2], i1399[3] )
  i1398.positionIterations = i1399[4]
  i1398.velocityIterations = i1399[5]
  i1398.velocityThreshold = i1399[6]
  i1398.maxLinearCorrection = i1399[7]
  i1398.maxAngularCorrection = i1399[8]
  i1398.maxTranslationSpeed = i1399[9]
  i1398.maxRotationSpeed = i1399[10]
  i1398.timeToSleep = i1399[11]
  i1398.linearSleepTolerance = i1399[12]
  i1398.angularSleepTolerance = i1399[13]
  i1398.defaultContactOffset = i1399[14]
  i1398.autoSimulation = !!i1399[15]
  i1398.queriesHitTriggers = !!i1399[16]
  i1398.queriesStartInColliders = !!i1399[17]
  i1398.callbacksOnDisable = !!i1399[18]
  i1398.reuseCollisionCallbacks = !!i1399[19]
  i1398.autoSyncTransforms = !!i1399[20]
  var i1401 = i1399[21]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1401[i + 0]) );
  }
  i1398.collisionMatrix = i1400
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.layerId = i1405[1]
  i1404.otherLayerId = i1405[2]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1407 = data
  var i1409 = i1407[0]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1409[i + 0]) );
  }
  i1406.qualityLevels = i1408
  var i1411 = i1407[1]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( i1411[i + 0] );
  }
  i1406.names = i1410
  i1406.shadows = i1407[2]
  i1406.anisotropicFiltering = i1407[3]
  i1406.antiAliasing = i1407[4]
  i1406.lodBias = i1407[5]
  i1406.shadowCascades = i1407[6]
  i1406.shadowDistance = i1407[7]
  i1406.shadowmaskMode = i1407[8]
  i1406.shadowProjection = i1407[9]
  i1406.shadowResolution = i1407[10]
  i1406.softParticles = !!i1407[11]
  i1406.softVegetation = !!i1407[12]
  i1406.activeColorSpace = i1407[13]
  i1406.desiredColorSpace = i1407[14]
  i1406.masterTextureLimit = i1407[15]
  i1406.maxQueuedFrames = i1407[16]
  i1406.particleRaycastBudget = i1407[17]
  i1406.pixelLightCount = i1407[18]
  i1406.realtimeReflectionProbes = !!i1407[19]
  i1406.shadowCascade2Split = i1407[20]
  i1406.shadowCascade4Split = new pc.Vec3( i1407[21], i1407[22], i1407[23] )
  i1406.streamingMipmapsActive = !!i1407[24]
  i1406.vSyncCount = i1407[25]
  i1406.asyncUploadBufferSize = i1407[26]
  i1406.asyncUploadTimeSlice = i1407[27]
  i1406.billboardsFaceCameraPosition = !!i1407[28]
  i1406.shadowNearPlaneOffset = i1407[29]
  i1406.streamingMipmapsMemoryBudget = i1407[30]
  i1406.maximumLODLevel = i1407[31]
  i1406.streamingMipmapsAddAllCameras = !!i1407[32]
  i1406.streamingMipmapsMaxLevelReduction = i1407[33]
  i1406.streamingMipmapsRenderersPerFrame = i1407[34]
  i1406.resolutionScalingFixedDPIFactor = i1407[35]
  i1406.streamingMipmapsMaxFileIORequests = i1407[36]
  return i1406
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1415 = data
  i1414.xPlacement = i1415[0]
  i1414.yPlacement = i1415[1]
  i1414.xAdvance = i1415[2]
  i1414.yAdvance = i1415[3]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1419 = data
  i1418.weight = i1419[0]
  i1418.vertices = i1419[1]
  i1418.normals = i1419[2]
  i1418.tangents = i1419[3]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1423 = data
  i1422.mode = i1423[0]
  i1422.parameter = i1423[1]
  i1422.threshold = i1423[2]
  return i1422
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[89],"90":[25],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[63],"100":[63],"101":[63],"102":[63],"103":[63],"104":[63],"105":[63],"106":[63],"107":[63],"108":[63],"109":[63],"110":[63],"111":[63],"112":[25],"113":[44],"114":[115],"116":[115],"15":[14],"117":[2],"60":[2],"4":[2],"40":[2],"33":[31],"118":[119],"120":[25],"121":[14],"39":[42,44],"29":[21,14],"122":[53,42,44],"123":[44,42],"124":[42,44],"125":[92],"126":[63],"55":[127],"128":[56],"129":[14],"130":[21,14],"131":[44],"132":[21,14],"133":[14],"134":[44,14],"20":[14,21],"135":[14],"136":[14],"137":[14],"18":[15],"28":[21,14],"138":[14],"17":[15],"139":[14],"140":[14],"141":[14],"142":[14],"143":[14],"144":[14],"145":[14],"146":[14],"147":[14],"148":[21,14],"149":[14],"150":[14],"151":[14],"152":[14],"153":[21,14],"119":[14],"154":[36],"155":[36],"37":[36],"156":[36],"157":[25],"158":[25],"159":[35]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.MonoBehaviour","ThirdParties.Truongtv.SoundManager.Sfx","Spine.Unity.SkeletonDataAsset","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Material","UnityEngine.Texture2D","TMPro.TMP_FontAsset","UnityEngine.Font","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Projects.Scripts.UIController.CoinValueText","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","ThirdParties.Truongtv.SoundManager.SoundManager","UnityEngine.AudioClip","Projects.Scripts.GamePlay.Sound.SoundInGameManager","UnityEngine.Camera","Projects.Scripts.UIController.GamePlayController","Projects.Scripts.GamePlay.CharacterController.BallController","UnityEngine.UI.Image","Spine.Unity.SkeletonGraphic","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.Sprite","Projects.Scripts.UIController.ButtonEffect","Projects.Scripts.UIController.CustomButton","UnityEngine.SpriteRenderer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Projects.Scripts.GamePlay.Item.MagnetItem","Spine.Unity.SkeletonAnimation","ThirdParties.Truongtv.SoundManager.SimpleAudio","UnityEngine.BoxCollider2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.BoneFollower","Projects.Scripts.GamePlay.Platform.Gate","UnityEngine.SpriteMask","Projects.Scripts.GamePlay.Enemy.EnemyController","Projects.Scripts.GamePlay.Item.Cage","Projects.Scripts.GamePlay.Building.StartLevel","Projects.Scripts.GamePlay.Building.CheckPoint","BrokenPlatform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityBone","Projects.Scripts.GamePlay.Item.Coin","UnityEngine.CircleCollider2D","Projects.Scripts.GamePlay.CharacterController.FollowCharacter","ThirdParties.Truongtv.SoundManager.Bgm","Truongtv.Utilities.DontDestroyOnLoad","Projects.Scripts.GamePlay.Item.TrySkinItem","UnityEngine.Rigidbody2D","UnityEngine.PhysicsMaterial2D","Projects.Scripts.GamePlay.CharacterController.BallMovement","Projects.Scripts.GamePlay.CharacterController.BallMagnetic","Projects.Scripts.GamePlay.CharacterController.BallAnimation","Projects.Scripts.GamePlay.CharacterController.BallHealth","Projects.Scripts.GamePlay.CharacterController.BallAttack","UnityEngine.AudioListener","Projects.Scripts.GamePlay.ObjectCollision","CameraFollower","UnityEngine.PolygonCollider2D","Projects.Scripts.GamePlay.Item.Star","UnityEngine.Cubemap","Projects.Scripts.GamePlay.Item.HeartItem","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ThirdParties.Truongtv.SoundManager.BaseAudio","Projects.Scripts.UIController.ToggleHelper","UnityEngine.UI.Toggle","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin"]

Deserializers.unityVersion = "2020.3.27f1";

Deserializers.productName = "Ball Hero: Zombie City";

Deserializers.lunaInitializationTime = "02/25/2022 02:22:35";

Deserializers.lunaVersion = "3.2.0";

Deserializers.lunaSHA = "9700e7eb48cc51ced8babec93160730d94cc2203";

Deserializers.packagesInfo = "com.unity.2d.animation: 5.0.10,com.unity.2d.pixel-perfect: 4.0.1,com.unity.2d.sprite: 1.0.0,com.unity.2d.tilemap: 1.0.0,com.unity.collab-proxy: 1.15.7,com.unity.ide.rider: 2.0.7,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 3.0.0,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:../LUNA/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "TeamOneGlobal";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.one.ball.zombie";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "fa40a048-d474-4aa4-afaa-849105ab253c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

