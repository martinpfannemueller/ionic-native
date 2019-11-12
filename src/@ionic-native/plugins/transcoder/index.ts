import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * Transcode options that are required to reencode or change the coding of the video.
 */
export interface TranscodeOptions {
  /** Path to the original video file for transcoding */
  fileUri: string,
  /** Path for the transcoded output file */
  outputFileName: string,
  /** Width of the transcoded output file */
  width: number,
  /** Height of the transcoded output file */
  height: number
}

export interface TranscodeResult {
  /** Path for the transcoded output file. Set when finished. */
  outputPath: string,
  /** Transcoding progress. 100% when finished. */
  progress: number
}

/**
 * @name Transcoder
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Transcoder } from '@ionic-native/transcoder';
 *
 *
 * constructor(private transcoder: Transcoder) { }
 *
 * ...
 *
 *
 * this.transcoder.transcode({fileUri: fileUri, outputFileName: "Transcoded", width: TranscodePresets.NonWideScreen.Width, height: TranscodePresets.NonWideScreen.Height})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Transcoder',
  plugin: 'cordova-plugin-video-transcode',
  pluginRef: 'Transcoder',
  repo: 'https://github.com/martinpfannemueller/cordova-plugin-video-transcode',
  install: '',
  installVariables: [],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Transcoder extends IonicNativePlugin {

  TranscodePresets = {

    WideScreen: {
      Width: 1280,
      Height: 720
    },
  
    NonWideScreen: {
        Width: 480,
        Height:360
    }
  };

  /**
   * Transcode a video
   * @param options {TranscodeOptions} Options
   * @returns {Promise<string>} Returns a promise that resolves to the transcode result including the progress and the path of the transcoded video
   */
  @Cordova()
  transcode(options: TranscodeOptions): Promise<TranscodeResult> {
    return;
  }

}
