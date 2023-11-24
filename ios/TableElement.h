
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTableElementSpec.h"

@interface TableElement : NSObject <NativeTableElementSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TableElement : NSObject <RCTBridgeModule>
#endif

@end
